import { archivedVideoSuffix, fileExtensionSeparator } from "../constants";

export function getArchivedVideoFilePath(videoFilePath: string) {
    const fileExtensionSeparatorIndex = videoFilePath.lastIndexOf(fileExtensionSeparator);
    return videoFilePath.substring(0, fileExtensionSeparatorIndex) + archivedVideoSuffix + fileExtensionSeparator + videoFilePath.substring(fileExtensionSeparatorIndex + 1);
}