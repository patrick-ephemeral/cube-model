import {
    createBlankCubieCube,
    createBlankUselessCube,
    cubieCubeToStickerCube,
    cubieCubeToUselessCube,
    Face,
    fillUselessCubeFromArray,
    IStickerCube,
    stickerCubeToCubieCube,
    uselessCubeToCubieCube,
    writeUselessCubeToArray,
} from "../src/main";

const scrambled: IStickerCube = {
    U: {
        faceAbove: Face.B,
        faceToRight: Face.R,
        topRow: {
            leftSticker: Face.U,
            centerSticker: Face.R,
            rightSticker: Face.F,
        },
        midRow: {
            leftSticker: Face.U,
            centerSticker: Face.U,
            rightSticker: Face.B,
        },
        btmRow: {
            leftSticker: Face.L,
            centerSticker: Face.F,
            rightSticker: Face.B,
        }
    },
    F: {
        faceAbove: Face.U,
        faceToRight: Face.R,
        topRow: {
            leftSticker: Face.B,
            centerSticker: Face.L,
            rightSticker: Face.U,
        },
        midRow: {
            leftSticker: Face.R,
            centerSticker: Face.F,
            rightSticker: Face.L,
        },
        btmRow: {
            leftSticker: Face.L,
            centerSticker: Face.B,
            rightSticker: Face.R,
        }
    },
    R: {
        faceAbove: Face.U,
        faceToRight: Face.B,
        topRow: {
            leftSticker: Face.R,
            centerSticker: Face.U,
            rightSticker: Face.D,
        },
        midRow: {
            leftSticker: Face.D,
            centerSticker: Face.R,
            rightSticker: Face.F,
        },
        btmRow: {
            leftSticker: Face.F,
            centerSticker: Face.L,
            rightSticker: Face.L,
        },
    },
    B: {
        faceAbove: Face.U,
        faceToRight: Face.L,
        topRow: {
            leftSticker: Face.R,
            centerSticker: Face.F,
            rightSticker: Face.L,
        },
        midRow: {
            leftSticker: Face.U,
            centerSticker: Face.B,
            rightSticker: Face.B,
        },
        btmRow: {
            leftSticker: Face.F,
            centerSticker: Face.R,
            rightSticker: Face.R,
        },
    },
    L: {
        faceAbove: Face.U,
        faceToRight: Face.F,
        topRow: {
            leftSticker: Face.F,
            centerSticker: Face.L,
            rightSticker: Face.U,
        },
        midRow: {
            leftSticker: Face.R,
            centerSticker: Face.L,
            rightSticker: Face.D,
        },
        btmRow: {
            leftSticker: Face.B,
            centerSticker: Face.F,
            rightSticker: Face.B,
        },
    },
    D: {
        faceAbove: Face.F,
        faceToRight: Face.R,
        topRow: {
            leftSticker: Face.D,
            centerSticker: Face.D,
            rightSticker: Face.U,
        },
        midRow: {
            leftSticker: Face.D,
            centerSticker: Face.D,
            rightSticker: Face.B,
        },
        btmRow: {
            leftSticker: Face.D,
            centerSticker: Face.U,
            rightSticker: Face.D,
        },
    },
};

describe("Transform Chain", () => {
    test("Stickers to Useless and Back doesn't change cube", () => {

        const newStickers = cubieCubeToStickerCube(
            uselessCubeToCubieCube(
                cubieCubeToUselessCube(
                    stickerCubeToCubieCube(scrambled),
                ),
            ),
        );

        expect(newStickers).not.toBe(scrambled);
        expect(newStickers).toEqual(scrambled);
    });

    test("Writing a cube to an array and readinging doesn't change it", () => {
        const useless = cubieCubeToUselessCube(stickerCubeToCubieCube(scrambled));
        const a = new Array(100000);
        writeUselessCubeToArray(useless, a, 45789);
        const blank = createBlankUselessCube();
        expect(blank).not.toEqual(useless);
        fillUselessCubeFromArray(blank, a, 45789);
        const stickers = cubieCubeToStickerCube(uselessCubeToCubieCube(blank));
        expect(stickers).toEqual(scrambled);
    });
});
