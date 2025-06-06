import {
    cubieCubeToStickerCube,
    cubieCubeToUselessCube,
    Face,
    IStickerCube,
    stickerCubeToCubieCube,
    uselessCubeToCubieCube,
} from "../src/main";

describe("Transform Chain", () => {
    test("Stickers to Useless and Back doesn't change cube", () => {
        const stickers: IStickerCube = {
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

        const newStickers = cubieCubeToStickerCube(
            uselessCubeToCubieCube(
                cubieCubeToUselessCube(
                    stickerCubeToCubieCube(stickers),
                ),
            ),
        );

        expect(newStickers).not.toBe(stickers);
        expect(newStickers).toEqual(stickers);
    });
});
