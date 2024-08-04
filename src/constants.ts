import { readFileSync } from "fs";

export const driveLetter = "C";
export const drivePathSeparator = ":";
export const fileSeparator = "/";
export const fileExtensionSeparator = ".";

export const moviesFolderPath = driveLetter + drivePathSeparator + fileSeparator + "XboxGames" + fileSeparator + "Minecraft Dungeons" + fileSeparator + "Content" + fileSeparator + "Dungeons" + fileSeparator + "Content" + fileSeparator + "Movies";

export const blankSplashFileName = "blank_splash720.mp4";
export const blankSplashContent = readFileSync(moviesFolderPath + fileSeparator + blankSplashFileName);

export const splashesToRemove = [
    "double11_splash720.mp4",
    "double11_splash1080.mp4",
    "microsoft_splash720.mp4",
    "microsoft_splash1080.mp4",
    "mojang_splash720.mp4",
    "mojang_splash1080.mp4",
    "splash_intro_720.mp4",
    "splash_intro_1080.mp4",
    "unreal_splash720.mp4",
    "unreal_splash1080.mp4"
]

export const archivedVideoSuffix = "-archived";