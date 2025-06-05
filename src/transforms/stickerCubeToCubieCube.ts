import { Face, ICornerCubie, ICubieCube, IEdgeCubie, IStickerCube } from "../cubeDef";

const DEFAULT_ORIENTATIONS = new Set([
    `${Face.U}${Face.L}${Face.F}`,
    `${Face.U}${Face.F}${Face.R}`,
    `${Face.U}${Face.R}${Face.B}`,
    `${Face.U}${Face.B}${Face.L}`,
    `${Face.D}${Face.F}${Face.L}`,
    `${Face.D}${Face.R}${Face.F}`,
    `${Face.D}${Face.B}${Face.R}`,
    `${Face.D}${Face.L}${Face.B}`,
    `${Face.U}${Face.F}`,
    `${Face.R}${Face.F}`,
    `${Face.D}${Face.F}`,
    `${Face.L}${Face.F}`,
    `${Face.R}${Face.U}`,
    `${Face.B}${Face.R}`,
    `${Face.D}${Face.R}`,
    `${Face.L}${Face.U}`,
    `${Face.B}${Face.L}`,
    `${Face.D}${Face.L}`,
    `${Face.U}${Face.B}`,
    `${Face.D}${Face.B}`,
]);

const getCornerCubie = (stickers: [Face, Face, Face]): ICornerCubie => {
    let i = 0;
    while (i < 3) {
        if (DEFAULT_ORIENTATIONS.has(
            `${stickers[(0 + i) % 3]}${stickers[(1 + i) % 3]}${stickers[(2 + i) % 3]}`,
        )) {
            return ({
                faceA: stickers[(0 + i) % 3],
                faceB: stickers[(1 + i) % 3],
                faceC: stickers[(2 + i) % 3],
                orientation: i as (0 | 1 | 2),
            });
        }
        i += 1;
    }

    throw new Error(`Corner is not valid: ${stickers[0]}${stickers[1]}${stickers[2]}`);
};

const getEdgeCubie = (stickers: [Face, Face]): IEdgeCubie => {
    let i = 0;
    while (i < 2) {
        if (DEFAULT_ORIENTATIONS.has(
            `${stickers[(0 + i) % 2]}${stickers[(1 + i) % 2]}`,
        )) {
            return ({
                faceA: stickers[(0 + i) % 2],
                faceB: stickers[(1 + i) % 2],
                orientation: i as (0 | 1),
            });
        }
        i += 1;
    }

    throw new Error(`Edge is not valid: ${stickers[0]}${stickers[1]}`);
};

export const stickerCubeToCubieCube = (sc: IStickerCube): ICubieCube => {
    if (
        sc.U.faceAbove !== Face.B || sc.U.faceToRight !== Face.R
        || sc.F.faceAbove !== Face.U || sc.F.faceToRight !== Face.R
        || sc.R.faceAbove !== Face.U || sc.R.faceToRight !== Face.B
        || sc.B.faceAbove !== Face.U || sc.B.faceToRight !== Face.L
        || sc.L.faceAbove !== Face.U || sc.L.faceToRight !== Face.F
        || sc.D.faceAbove !== Face.F || sc.D.faceToRight !== Face.R
    ) {
        throw new Error("Sticker cube orientation not suppported");
    }


    return {
        ulf: getCornerCubie([sc.U.btmRow.leftSticker, sc.L.topRow.rightSticker, sc.F.topRow.leftSticker]),
        ufr: getCornerCubie([sc.U.btmRow.rightSticker, sc.F.topRow.rightSticker, sc.R.topRow.leftSticker]),
        urb: getCornerCubie([sc.U.topRow.rightSticker, sc.R.topRow.rightSticker, sc.B.topRow.leftSticker]),
        ubl: getCornerCubie([sc.U.topRow.leftSticker, sc.B.topRow.rightSticker, sc.L.topRow.leftSticker]),
        dfl: getCornerCubie([sc.D.topRow.leftSticker, sc.F.btmRow.leftSticker, sc.L.btmRow.rightSticker]),
        drf: getCornerCubie([sc.D.topRow.rightSticker, sc.R.btmRow.leftSticker, sc.F.btmRow.rightSticker]),
        dbr: getCornerCubie([sc.D.btmRow.rightSticker, sc.B.btmRow.leftSticker, sc.R.btmRow.rightSticker]),
        dlb: getCornerCubie([sc.D.btmRow.leftSticker, sc.L.btmRow.leftSticker, sc.B.btmRow.rightSticker]),
        uf: getEdgeCubie([sc.U.btmRow.centerSticker, sc.F.topRow.centerSticker]),
        rf: getEdgeCubie([sc.R.midRow.leftSticker, sc.F.midRow.rightSticker]),
        df: getEdgeCubie([sc.D.topRow.centerSticker, sc.F.btmRow.centerSticker]),
        lf: getEdgeCubie([sc.L.midRow.rightSticker, sc.F.midRow.leftSticker]),
        ru: getEdgeCubie([sc.R.topRow.centerSticker, sc.U.midRow.rightSticker]),
        br: getEdgeCubie([sc.B.midRow.leftSticker, sc.R.midRow.rightSticker]),
        dr: getEdgeCubie([sc.D.midRow.rightSticker, sc.R.btmRow.centerSticker]),
        lu: getEdgeCubie([sc.L.topRow.centerSticker, sc.U.midRow.leftSticker]),
        bl: getEdgeCubie([sc.B.midRow.rightSticker, sc.L.midRow.leftSticker]),
        dl: getEdgeCubie([sc.D.midRow.leftSticker, sc.L.btmRow.centerSticker]),
        ub: getEdgeCubie([sc.U.topRow.centerSticker, sc.B.topRow.centerSticker]),
        db: getEdgeCubie([sc.D.btmRow.centerSticker, sc.B.btmRow.centerSticker]),
    };
};
