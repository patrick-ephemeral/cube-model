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


printStickerCube(stickers);
rotateFace(toTurn, Face.R, false);
const turned = cubieCubeToStickerCube(toTurn);
printStickerCube(turned);