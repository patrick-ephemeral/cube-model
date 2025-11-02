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
    bruteForceSolve,
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
            console.log("   Turns: R R2 R' F F2 F' U U2 U' L L2 L' B B2 B' D D2 D'");
            console.log("   Solve: S");
            console.log("   Quit: X");
        }
        const input = (await prompt.question("> ")).toUpperCase();
        switch (input) {
            case "X":
                loop = false;
                break;
            case "R":
                biTurn = rotateFaceBigInt(biTurn, Face.R, true, true);
                break;
            case "R2":
                biTurn = rotateFaceBigInt(biTurn, Face.R, true, false);
                break;
            case "R'":
                biTurn = rotateFaceBigInt(biTurn, Face.R, false, true);
                break;
            case "F":
                biTurn = rotateFaceBigInt(biTurn, Face.F, true, true);
                break;
            case "F2":
                biTurn = rotateFaceBigInt(biTurn, Face.F, true, false);
                break;
            case "F'":
                biTurn = rotateFaceBigInt(biTurn, Face.F, false, true);
                break;
            case "U":
                biTurn = rotateFaceBigInt(biTurn, Face.U, true, true);
                break;
            case "U2":
                biTurn = rotateFaceBigInt(biTurn, Face.U, true, false);
                break;
            case "U'":
                biTurn = rotateFaceBigInt(biTurn, Face.U, false, true);
                break;
            case "L":
                biTurn = rotateFaceBigInt(biTurn, Face.L, true, true);
                break;
            case "L2":
                biTurn = rotateFaceBigInt(biTurn, Face.L, true, false);
                break;
            case "L'":
                biTurn = rotateFaceBigInt(biTurn, Face.L, false, true);
                break;
            case "B":
                biTurn = rotateFaceBigInt(biTurn, Face.B, true, true);
                break;
            case "B2":
                biTurn = rotateFaceBigInt(biTurn, Face.B, true, false);
                break;
            case "B'":
                biTurn = rotateFaceBigInt(biTurn, Face.B, false, true);
                break;
            case "D":
                biTurn = rotateFaceBigInt(biTurn, Face.D, true, true);
                break;
            case "D2":
                biTurn = rotateFaceBigInt(biTurn, Face.D, true, false);
                break;
            case "D'":
                biTurn = rotateFaceBigInt(biTurn, Face.D, false, true);
                break;
            case "S":
                console.log("Solving...");
                var solution = bruteForceSolve(biTurn);
                console.log(solution.map(t => `${t.face}${t.clockwise ? "" : "'"}`).join("  "));
                break;
            case "Y":
                console.log("");
                console.log(JSON.stringify(useless, null, 2));
                break;
            default:
                printInstructions = true;
                break;
        }

    } while (loop)

    prompt.close();

})();

