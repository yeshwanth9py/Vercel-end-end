import {createClient, commandOptions} from "redis";
import {dowloadS3Folder} from "./aws";
import { buildProject } from "./utils";
const subsrciber = createClient();
subsrciber.connect();


async function main(){
    while(1){
        const response = await subsrciber.brPop(
            commandOptions({isolated: true}),
            'build-queue',
            0
        );
        // @ts-ignore;
        const id = res.element

        await dowloadS3Folder(`/output/${id}`)
        await buildProject(id); 
    }
}

main()