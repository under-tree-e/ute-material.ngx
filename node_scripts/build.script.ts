import fs from "fs";
import packageJson from "../package.json";
import packageProject from "../projects/ngx-ute-material/package.json";
import path from "path";

export default class BuildScript {
    constructor(private command: any) {}
    public async init(publish: boolean = false) {
        try {
            console.log("Prepare folders...");

            await this.command("cf", ["./dist"]);

            packageProject.version = packageJson.version;
            let configString: string = JSON.stringify(packageProject, null, 2);
            fs.writeFileSync(path.resolve(`projects/ngx-ute-material/package.json`), configString);

            console.log("Building app...");

            await this.command("ng", [`build`, `--base-href`, `/ute-material.ngx/`]);
            await this.command("ng", ["build", "ngx-ute-material"]);

            console.log("Packing app...");

            const file = fs.readFileSync("README.md", "utf-8");
            const newValue: string = file.replace(/(\/badge\/npm_package-(.{5,10})-red)/g, `/badge/npm_package-${packageJson.version}-red`);
            fs.writeFileSync("README.md", newValue, "utf-8");

            fs.copyFileSync(`README.md`, `dist/ngx-ute-material/README.md`);

            if (publish) {
                console.log("Sync git branches...");

                await this.command("git", [`checkout`, `master`]);
                await this.command("git", [`pull`, `--all`]);

                await this.command("git", [`checkout`, `dev`]);
                await this.command("git", [`add`, `.`]);
                await this.command("git", [`commit`, `-m`, `Update v${packageJson.version}`]);
                await this.command("git", [`push`]);

                console.log("Update master branch");

                let result: string = await this.command("gh", [`pr`, `create`, `--base`, `master`, `--head`, `dev`, `--fill`], true);
                const pullStrings: string[] = result.split("/");
                const pullId: number = parseInt(pullStrings[pullStrings.length - 1]);
                await this.command("gh", [`pr`, `merge`, `${pullId}`, `--merge`]);

                await this.command("git", [`pull`, `origin`, `master`]);
                await this.command("git", [`push`]);

                console.log("Publishing app to Github...");

                await this.command("gh", [`auth`, `login`, `--with-token`, `<`, `.gitToken`]);
                await this.command("gh", [`release`, `create`, `v${packageJson.version}`, `--target`, `master`, `--generate-notes`]);

                // console.log("Publishing app to NPM.JS...");

                // execSync("cd dist/ngx-ute-material/ && npm publish");

                console.log("Publishing app to Github.io...");

                await this.command("npx", [`angular-cli-ghpages`, `--dir=dist/ngx-ute-material-app`]);
            }

            console.log("Build complete success!");
        } catch (error) {
            console.error(error);
        }
    }
}
