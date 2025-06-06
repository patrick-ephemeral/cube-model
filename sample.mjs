import rl from "readline/promises";
import {
    cubieCubeToStickerCube,
    Face,
    rotateFace,
    SOLVED_CUBIE_CUBE,
    stickerCubeToCubieCube,
} from "./dist/index.mjs";

const stickers = cubieCubeToStickerCube(SOLVED_CUBIE_CUBE);
const toTurn = stickerCubeToCubieCube(stickers);

const printStickerCube = (sc) => {
    console.log();
    console.log(`                     ${sc.U.topRow.leftSticker}  ${sc.U.topRow.centerSticker}  ${sc.U.topRow.rightSticker}`);
    console.log(`                  ${sc.U.midRow.leftSticker}  ${sc.U.midRow.centerSticker}  ${sc.U.midRow.rightSticker}`);
    console.log(`               ${sc.U.btmRow.leftSticker}  ${sc.U.btmRow.leftSticker}  ${sc.U.btmRow.rightSticker}       ${sc.R.topRow.rightSticker}    ${sc.B.topRow.leftSticker}  ${sc.B.topRow.centerSticker}  ${sc.B.topRow.rightSticker}`);
    console.log(`                          ${sc.R.topRow.centerSticker}  ${sc.R.midRow.rightSticker}    ${sc.B.midRow.leftSticker}  ${sc.B.midRow.centerSticker}  ${sc.B.midRow.rightSticker}`);
    console.log(` ${sc.L.topRow.leftSticker}  ${sc.L.topRow.centerSticker}  ${sc.L.topRow.rightSticker}    ${sc.F.topRow.leftSticker}  ${sc.F.topRow.centerSticker}  ${sc.F.topRow.rightSticker}    ${sc.R.topRow.leftSticker}  ${sc.R.midRow.centerSticker}  ${sc.R.btmRow.rightSticker}    ${sc.B.btmRow.leftSticker}  ${sc.B.btmRow.centerSticker}  ${sc.B.btmRow.rightSticker}`);
    console.log(` ${sc.L.midRow.leftSticker}  ${sc.L.midRow.centerSticker}  ${sc.L.midRow.rightSticker}    ${sc.F.midRow.leftSticker}  ${sc.F.midRow.centerSticker}  ${sc.F.midRow.rightSticker}    ${sc.R.midRow.leftSticker}  ${sc.R.btmRow.centerSticker}`);
    console.log(` ${sc.L.btmRow.leftSticker}  ${sc.L.btmRow.centerSticker}  ${sc.L.btmRow.rightSticker}    ${sc.F.btmRow.leftSticker}  ${sc.F.btmRow.centerSticker}  ${sc.F.btmRow.rightSticker}    ${sc.R.btmRow.leftSticker}`);
    console.log(``);
    console.log(`            ${sc.D.topRow.leftSticker}  ${sc.D.topRow.centerSticker}  ${sc.D.topRow.rightSticker}`);
    console.log(`            ${sc.D.midRow.leftSticker}  ${sc.D.midRow.centerSticker}  ${sc.D.midRow.rightSticker}`);
    console.log(`            ${sc.D.btmRow.leftSticker}  ${sc.D.btmRow.centerSticker}  ${sc.D.btmRow.rightSticker}`);
    console.log();
};

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
    let printInstructions = true;
    let loop = true;

    do {
        printStickerCube(cubieCubeToStickerCube(toTurn));
        if (printInstructions) {
            printInstructions = false;
            console.log("Valid Options:");
            console.log("   Turns: R R' F F' U U' L L' B B' D D'");
            console.log("   Quit: X");
        }
        const input = (await prompt.question("> ")).toUpperCase();
        switch (input) {
            case "X":
                loop = false;
                break;
            case "R":
                rotateFace(toTurn, Face.R, true);
                break;
            case "R'":
                rotateFace(toTurn, Face.R, false);
                break;
            case "F":
                rotateFace(toTurn, Face.F, true);
                break;
            case "F'":
                rotateFace(toTurn, Face.F, false);
                break;
            case "U":
                rotateFace(toTurn, Face.U, true);
                break;
            case "U'":
                rotateFace(toTurn, Face.U, false);
                break;
            case "L":
                rotateFace(toTurn, Face.L, true);
                break;
            case "L'":
                rotateFace(toTurn, Face.L, false);
                break;
            case "B":
                rotateFace(toTurn, Face.B, true);
                break;
            case "B'":
                rotateFace(toTurn, Face.B, false);
                break;
            case "D":
                rotateFace(toTurn, Face.D, true);
                break;
            case "D'":
                rotateFace(toTurn, Face.D, false);
                break;
            default:
                printInstructions = true;
                break;
        }

    } while (loop)

    prompt.close();

})();

