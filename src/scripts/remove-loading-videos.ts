import { archivedVideoSuffix, blankSplashContent, fileExtensionSeparator, fileSeparator, moviesFolderPath, splashesToRemove } from "../constants";
import { existsSync, readFileSync, writeFileSync } from "fs";

export function removeLoadingVideos() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolderPath + fileSeparator + loadingVideo;

        const content = readFileSync(fullFilePath);

        // Save content to new file, in case the user wants to re-add the loading videos
        const split = fullFilePath.split(fileExtensionSeparator);

        const fileEnding = split[1];
        split[1] = archivedVideoSuffix;

        let archivedVideoFilePath = split.join("");
        archivedVideoFilePath += fileExtensionSeparator + fileEnding;

        if (existsSync(archivedVideoFilePath)) {
            console.log("Archive for video " + fullFilePath + " already exists, skipping.")
            continue;
        }

        console.log("Removing video " + fullFilePath + " and archiving it at " + archivedVideoFilePath + ".");

        writeFileSync(archivedVideoFilePath, content);
        writeFileSync(fullFilePath, blankSplashContent);
    }
}