// Run command:
// npm install ts-node --save-dev
// npx ts-node node_scripts

import BuildScript from "./build.script";
import config from "./config.json";
import { spawn } from "child_process";

class NodeScripts {
    private buildScript: BuildScript = new BuildScript(this.command);

    constructor() {
        let noArg: boolean = true;
        process.argv
            .filter((arg) => arg.includes("--") || arg.match(/^[-]\w{1}/g))
            .map((arg) => {
                noArg = false;
                switch (arg) {
                    case "--build":
                    case "-b":
                        this.buildScript.init();
                        break;
                    case "--publish":
                    case "-pb":
                        this.buildScript.init(true);
                        break;
                    case "--help":
                    case "-h":
                        console.log("--pack OR -p", "- Create VERSION file");
                        console.log("--resources OR -r", "- Create app images");
                        break;
                }
            });
        if (noArg) {
            console.log("No arguments found. Print `--help` for more info");
        }
    }

    private command(command: string, args: string[], returnString: boolean = false): Promise<any> {
        let p = spawn(command, args);
        let text: string = "";
        return new Promise((resolve, reject) => {
            p.stdout.on("data", (x) => {
                if (x.toString().length > 100) {
                    process.stdout.write(x.toString().slice(-100));
                } else {
                    process.stdout.write(x.toString());
                    if (returnString) text = x.toString();
                }
            });
            p.stderr.on("data", (x) => {
                process.stderr.write(x.toString());
                if (returnString) {
                    reject(x.toString());
                }
            });
            p.on("close", () => {
                resolve(returnString ? text : true);
            });
        });
    }
}

new NodeScripts();
