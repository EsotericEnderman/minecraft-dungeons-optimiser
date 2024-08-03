import { readFileSync, rmSync, writeFileSync } from "fs";
import { archivedVideoEnding, moviesFolder, splashesToRemove } from "../constants";

export function revertChanges() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolder + "/" + loadingVideo;

        const split = fullFilePath.split(".");
        split[1] = archivedVideoEnding;

        let archivedVideoFilePath = split.join("")
        archivedVideoFilePath += ".mp4";

        let content: Buffer;

        try {
            content = readFileSync(archivedVideoFilePath);
        } catch (error) {
            console.log("Could not read file " + archivedVideoFilePath + ".");
            continue;
        }

        console.log("Reverting deletion of video " + fullFilePath + ".");

        writeFileSync(fullFilePath, content);
        rmSync(archivedVideoFilePath);
    }
}

revertChanges();