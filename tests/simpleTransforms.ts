import { cubieCubeToStickerCube, cubieCubeToUselessCube, Face, SOLVED_CUBIE_CUBE, stickerCubeToCubieCube, uselessCubeToCubieCube } from "../src/main";

describe("Simple Transforms", () => {

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

    test("Trivial Stickers to Cube matches Default Cube", () => {
        const cubieCube = stickerCubeToCubieCube({
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

        expect(cubieCube).toEqual(SOLVED_CUBIE_CUBE);
    });

    test("Default cube to Useless Cube matches expectations", () => {
        var useless = cubieCubeToUselessCube(SOLVED_CUBIE_CUBE);
        expect(useless).toEqual({
            ulf: { piece: 0, orientation: 0 },
            ufr: { piece: 1, orientation: 0 },
            urb: { piece: 2, orientation: 0 },
            ubl: { piece: 3, orientation: 0 },
            dfl: { piece: 4, orientation: 0 },
            drf: { piece: 5, orientation: 0 },
            dbr: { piece: 6, orientation: 0 },
            dlb: { piece: 7, orientation: 0 },
            uf: { piece: 8, orientation: 0 },
            rf: { piece: 9, orientation: 0 },
            df: { piece: 10, orientation: 0 },
            lf: { piece: 11, orientation: 0 },
            ru: { piece: 12, orientation: 0 },
            br: { piece: 13, orientation: 0 },
            dr: { piece: 14, orientation: 0 },
            lu: { piece: 15, orientation: 0 },
            bl: { piece: 16, orientation: 0 },
            dl: { piece: 17, orientation: 0 },
            ub: { piece: 18, orientation: 0 },
            db: { piece: 19, orientation: 0 },
        });
    });

    test("Trivial Useless Cube to Cubie Cube matches solved cube", () => {
        var cube = uselessCubeToCubieCube({
            ulf: { piece: 0, orientation: 0 },
            ufr: { piece: 1, orientation: 0 },
            urb: { piece: 2, orientation: 0 },
            ubl: { piece: 3, orientation: 0 },
            dfl: { piece: 4, orientation: 0 },
            drf: { piece: 5, orientation: 0 },
            dbr: { piece: 6, orientation: 0 },
            dlb: { piece: 7, orientation: 0 },
            uf: { piece: 8, orientation: 0 },
            rf: { piece: 9, orientation: 0 },
            df: { piece: 10, orientation: 0 },
            lf: { piece: 11, orientation: 0 },
            ru: { piece: 12, orientation: 0 },
            br: { piece: 13, orientation: 0 },
            dr: { piece: 14, orientation: 0 },
            lu: { piece: 15, orientation: 0 },
            bl: { piece: 16, orientation: 0 },
            dl: { piece: 17, orientation: 0 },
            ub: { piece: 18, orientation: 0 },
            db: { piece: 19, orientation: 0 },
        });
        expect(cube).toEqual(SOLVED_CUBIE_CUBE);
    });
});
