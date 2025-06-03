import { cubieCubeToStickerCube, Face, SOLVED_CUBIE_CUBE } from "../src/main";

describe("Stickers", () => {

    test("Default Cube Stickers Match Expectations", () => {
        const stickers = cubieCubeToStickerCube(SOLVED_CUBIE_CUBE);
        expect(stickers).toEqual({
            U: {
                faceAbove: Face.B,
                faceToRight: Face.R,
                topRow: {
                    leftSticker: Face.U,
                    centerSticker: Face.U,
                    rightSticker: Face.U,
                },
                midRow: {
                    leftSticker: Face.U,
                    centerSticker: Face.U,
                    rightSticker: Face.U,
                },
                btmRow: {
                    leftSticker: Face.U,
                    centerSticker: Face.U,
                    rightSticker: Face.U,
                },
            },
            F: {
                faceAbove: Face.U,
                faceToRight: Face.R,
                topRow: {
                    leftSticker: Face.F,
                    centerSticker: Face.F,
                    rightSticker: Face.F,
                },
                midRow: {
                    leftSticker: Face.F,
                    centerSticker: Face.F,
                    rightSticker: Face.F,
                },
                btmRow: {
                    leftSticker: Face.F,
                    centerSticker: Face.F,
                    rightSticker: Face.F,
                },
            },
            R: {
                faceAbove: Face.U,
                faceToRight: Face.B,
                topRow: {
                    leftSticker: Face.R,
                    centerSticker: Face.R,
                    rightSticker: Face.R,
                },
                midRow: {
                    leftSticker: Face.R,
                    centerSticker: Face.R,
                    rightSticker: Face.R,
                },
                btmRow: {
                    leftSticker: Face.R,
                    centerSticker: Face.R,
                    rightSticker: Face.R,
                },
            },
            B: {
                faceAbove: Face.U,
                faceToRight: Face.L,
                topRow: {
                    leftSticker: Face.B,
                    centerSticker: Face.B,
                    rightSticker: Face.B,
                },
                midRow: {
                    leftSticker: Face.B,
                    centerSticker: Face.B,
                    rightSticker: Face.B,
                },
                btmRow: {
                    leftSticker: Face.B,
                    centerSticker: Face.B,
                    rightSticker: Face.B,
                },
            },
            L: {
                faceAbove: Face.U,
                faceToRight: Face.F,
                topRow: {
                    leftSticker: Face.L,
                    centerSticker: Face.L,
                    rightSticker: Face.L,
                },
                midRow: {
                    leftSticker: Face.L,
                    centerSticker: Face.L,
                    rightSticker: Face.L,
                },
                btmRow: {
                    leftSticker: Face.L,
                    centerSticker: Face.L,
                    rightSticker: Face.L,
                },
            },
            D: {
                faceAbove: Face.F,
                faceToRight: Face.R,
                topRow: {
                    leftSticker: Face.D,
                    centerSticker: Face.D,
                    rightSticker: Face.D,
                },
                midRow: {
                    leftSticker: Face.D,
                    centerSticker: Face.D,
                    rightSticker: Face.D,
                },
                btmRow: {
                    leftSticker: Face.D,
                    centerSticker: Face.D,
                    rightSticker: Face.D,
                },
            },
        });
    });
});
