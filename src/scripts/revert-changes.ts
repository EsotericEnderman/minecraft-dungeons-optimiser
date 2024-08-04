import { readFileSync, rmSync, writeFileSync } from "fs";
import { fileSeparator, moviesFolderPath, splashesToRemove } from "../constants";
import { getArchivedVideoFilePath } from "../functions/get-archived-video-file-path";

export function revertChanges() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolderPath + fileSeparator + loadingVideo;
        const archivedVideoFilePath = getArchivedVideoFilePath(fullFilePath);

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