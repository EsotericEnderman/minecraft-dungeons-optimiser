import { archivedVideoEnding, blankSplashContent, moviesFolder, splashesToRemove } from "../constants.js";
import { readFileSync, rmSync, writeFileSync } from "fs";

export function removeLoadingVideos() {
    for (const loadingVideo of splashesToRemove) {
        const fullFilePath = moviesFolder + "/" + loadingVideo;

        const content = readFileSync(fullFilePath);

        // Save content to new file, in case the user wants to re-add the loading videos
        const split = fullFilePath.split(".");
        split[1] = archivedVideoEnding;

        let archivedVideoFilePath = split.join("")
        archivedVideoFilePath += ".mp4";

        console.log("Removing video " + fullFilePath + " and archiving it at " + archivedVideoFilePath + ".");

        writeFileSync(archivedVideoFilePath, content);

        rmSync(fullFilePath);
        writeFileSync(fullFilePath, blankSplashContent);
    }
}