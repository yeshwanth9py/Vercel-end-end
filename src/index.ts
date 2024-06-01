import express from "express";
const app = express();
import path from "path";
const cors = require("Cors");
import simpleGit from 'simple-git';
import { getAllFiles } from "./file";
import { uploadFile } from "./aws";

import {createClient} from "redis";
const publisher = createClient();
publisher.connect();

let {generate} = require("./utils");

app.use(cors());

app.post("/deploy", async (req, res)=>{
    const repourl = req.body.repourl;
    console.log(repourl);
    const id = generate();
    await simpleGit().clone(repourl, path.join(__dirname,`output/${id}`));

    const files = getAllFiles(path.join(__dirname, `output/${id}`));

    files.forEach(async file =>{
        await uploadFile(file.slice(__dirname.length+1), file);
    });

    publisher.lPush("build-queue", id);
    
    res.json({id}); 
});


app.listen(3000,()=>{
    console.log("server started at port ", 3000);
});