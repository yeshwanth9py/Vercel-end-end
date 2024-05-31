import fs from "fs";
import path from "path";

export const getAllFiles = (folderPath: string)=>{

    let response: string[] = [];

    const allfilesandfolders = fs.readdirSync(folderPath);

    allfilesandfolders.forEach((file)=>{
        const fullfilepath = path.join(folderPath, file);
        if(fs.statSync(fullfilepath).isDirectory()) {
            response = response.concat(getAllFiles(fullfilepath));
        } else {
            response.push(fullfilepath);
        }
    })
    return response;

}