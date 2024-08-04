import { archivedVideoEnding, blankSplashContent, moviesFolder, splashesToRemove } from "../constants";
import { existsSync, readFileSync, writeFileSync } from "fs";

export function removeLoadingVideos() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolder + "/" + loadingVideo;

        const content = readFileSync(fullFilePath);

        // Save content to new file, in case the user wants to re-add the loading videos
        const split = fullFilePath.split(".");
        split.splice(1, 0, archivedVideoSuffix);
        let archivedVideoFilePath = split.join("")

        if (existsSync(archivedVideoFilePath)) {
            console.log("Archive for video " + fullFilePath + " already exists, skipping.")
            continue;
        }

        console.log("Removing video " + fullFilePath + " and archiving it at " + archivedVideoFilePath + ".");

        writeFileSync(archivedVideoFilePath, content);
        writeFileSync(fullFilePath, blankSplashContent);
    }
}