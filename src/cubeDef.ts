export enum Face {
    U = "U",
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

export type PIECE_ID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

export interface IUselessPiece {
    piece: PIECE_ID;
    orientation: 0 | 1 | 2;
};

export interface IUselessCube {
    ulf: IUselessPiece;
    ufr: IUselessPiece;
    urb: IUselessPiece;
    ubl: IUselessPiece;
    dfl: IUselessPiece;
    drf: IUselessPiece;
    dbr: IUselessPiece;
    dlb: IUselessPiece;
    uf: IUselessPiece;
    rf: IUselessPiece;
    df: IUselessPiece;
    lf: IUselessPiece;
    ru: IUselessPiece;
    br: IUselessPiece;
    dr: IUselessPiece;
    lu: IUselessPiece;
    bl: IUselessPiece;
    dl: IUselessPiece;
    ub: IUselessPiece;
    db: IUselessPiece;
};

export interface IMove {
    face: Face,
    clockwise: boolean,
};
