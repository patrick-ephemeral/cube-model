import rl from "readline/promises";
import {
    cubieCubeToStickerCube,
    Face,
    rotateFaceBigInt,
    SOLVED_CUBIE_CUBE,
    stickerCubeToCubieCube,
    cubieCubeToUselessCube,
    getBigIntForCube,
    fillUselessCubeFromBigInt,
    uselessCubeToCubieCube,
} from "./dist/index.mjs";

const stickers = cubieCubeToStickerCube(SOLVED_CUBIE_CUBE);
const useless = cubieCubeToUselessCube(stickerCubeToCubieCube(stickers));
let biTurn = getBigIntForCube(useless);


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
        fillUselessCubeFromBigInt(useless, biTurn);
        printStickerCube(cubieCubeToStickerCube(uselessCubeToCubieCube(useless)));
        if (printInstructions) {
            printInstructions = false;
            console.log("Valid Options:");
            console.log("   Turns: R R' F F' U U' L L' B B' D D'");
            // console.log("   Solve: S");
            console.log("   Quit: X");
        }
        const input = (await prompt.question("> ")).toUpperCase();
        switch (input) {
            case "X":
                loop = false;
                break;
            case "R":
                biTurn = rotateFaceBigInt(biTurn, Face.R, true);
                break;
            case "R'":
                biTurn = rotateFaceBigInt(biTurn, Face.R, false);
                break;
            case "F":
                biTurn = rotateFaceBigInt(biTurn, Face.F, true);
                break;
            case "F'":
                biTurn = rotateFaceBigInt(biTurn, Face.F, false);
                break;
            case "U":
                biTurn = rotateFaceBigInt(biTurn, Face.U, true);
                break;
            case "U'":
                biTurn = rotateFaceBigInt(biTurn, Face.U, false);
                break;
            case "L":
                biTurn = rotateFaceBigInt(biTurn, Face.L, true);
                break;
            case "L'":
                biTurn = rotateFaceBigInt(biTurn, Face.L, false);
                break;
            case "B":
                biTurn = rotateFaceBigInt(biTurn, Face.B, true);
                break;
            case "B'":
                biTurn = rotateFaceBigInt(biTurn, Face.B, false);
                break;
            case "D":
                biTurn = rotateFaceBigInt(biTurn, Face.D, true);
                break;
            case "D'":
                biTurn = rotateFaceBigInt(biTurn, Face.D, false);
                break;
                // case "S":
                //     console.log("Solving...");
                //     var solution = solveCubieCube(toTurn);
                //     console.log(solution.map(t => `${t.face}${t.clockwise ? "" : "'"}`).join("  "));
                break;
            default:
                printInstructions = true;
                break;
        }

    } while (loop)

    prompt.close();

})();

