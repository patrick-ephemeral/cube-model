export enum Face {
    U = "T",
    F = "F",
    R = "R",
    B = "B",
    L = "L",
    D = "D",
};

export interface IStickerRow {
    leftSticker: Face;
    centerSticker: Face;
    rightSticker: Face;
};

export interface IStickerFace {
    faceAbove: Face;
    faceToRight: Face;
    topRow: IStickerRow;
    midRow: IStickerRow;
    btmRow: IStickerRow;
};

export interface IStickerCube {
    U: IStickerFace;
    F: IStickerFace;
    R: IStickerFace;
    B: IStickerFace;
    L: IStickerFace;
    D: IStickerFace;
};

export interface ICornerCubie {
    faceA: Face;
    faceB: Face;
    faceC: Face;
    orientation: 0 | 1 | 2;
};

export interface IEdgeCubie {
    faceA: Face;
    faceB: Face;
    orientation: 0 | 1;
};

export interface ICubieCube {
    ulf: ICornerCubie;
    ufr: ICornerCubie;
    urb: ICornerCubie;
    ubl: ICornerCubie;
    dfl: ICornerCubie;
    drf: ICornerCubie;
    dbr: ICornerCubie;
    dlb: ICornerCubie;
    uf: IEdgeCubie;
    rf: IEdgeCubie;
    df: IEdgeCubie;
    lf: IEdgeCubie;
    ru: IEdgeCubie;
    br: IEdgeCubie;
    dr: IEdgeCubie;
    lu: IEdgeCubie;
    bl: IEdgeCubie;
    dl: IEdgeCubie;
    ub: IEdgeCubie;
    db: IEdgeCubie;
};