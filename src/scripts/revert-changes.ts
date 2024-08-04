import { readFileSync, rmSync, writeFileSync } from "fs";
import { archivedVideoSuffix, fileExtensionSeparator, fileSeparator, moviesFolderPath, splashesToRemove } from "../constants";

export function revertChanges() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolderPath + fileSeparator + loadingVideo;

        const fileExtensionSeparatorIndex = fullFilePath.lastIndexOf(fileExtensionSeparator);
        const archivedVideoFilePath = fullFilePath.substring(0, fileExtensionSeparatorIndex) + archivedVideoSuffix + fileExtensionSeparator + fullFilePath.substring(fileExtensionSeparatorIndex + 1);

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