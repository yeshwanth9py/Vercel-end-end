import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId:"",
    secretAccessKey:"",
    endpoint:""
})


export const uploadFile = async (filename: string, localfilepath: string)=>{
    const filecontent = fs.readFileSync(filename);
    const response = await s3.upload({
        Body: filecontent,
        Bucket: "vercel",
        Key: localfilepath,
    }).promise();

    console.log(response);
    
}