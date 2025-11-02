import { Face, ICornerCubie, ICubieCube, IEdgeCubie, IUselessCube, IUselessPiece, PIECE_ID } from "../cubeDef";

const pairs: [PIECE_ID, Face[]][] = [
    [0, [Face.U, Face.L, Face.F]],
    [1, [Face.U, Face.F, Face.R]],
    [2, [Face.U, Face.R, Face.B]],
    [3, [Face.U, Face.B, Face.L]],
    [4, [Face.D, Face.F, Face.L]],
    [5, [Face.D, Face.R, Face.F]],
    [6, [Face.D, Face.B, Face.R]],
    [7, [Face.D, Face.L, Face.B]],
    [8, [Face.U, Face.F]],
    [9, [Face.R, Face.F]],
    [10, [Face.D, Face.F]],
    [11, [Face.L, Face.F]],
    [12, [Face.R, Face.U]],
    [13, [Face.B, Face.R]],
    [14, [Face.D, Face.R]],
    [15, [Face.L, Face.U]],
    [16, [Face.B, Face.L]],
    [17, [Face.D, Face.L]],
    [18, [Face.U, Face.B]],
    [19, [Face.D, Face.B]],
];
const uselessToFaces = new Map(pairs);
const facesToUseless = new Map(pairs.map(([u, f]) => [f.join(""), u]) as [string, PIECE_ID][]);

const getUselessPieceFromCorner = (c: ICornerCubie): IUselessPiece => ({
    piece: facesToUseless.get([c.faceA, c.faceB, c.faceC].join("")) ?? 0,
    orientation: c.orientation,
});

const getCornerFromUselessPiece = (u: IUselessPiece): ICornerCubie => {
    const [faceA, faceB, faceC] = uselessToFaces.get(u.piece) ?? [];
    return {
        faceA,
        faceB,
        faceC,
        orientation: u.orientation,
    };
};

const getUselessPieceFromEdge = (e: IEdgeCubie): IUselessPiece => ({
    piece: facesToUseless.get([e.faceA, e.faceB].join("")) ?? 8,
    orientation: e.orientation,
});

const getEdgeFromUselessPiece = (u: IUselessPiece): IEdgeCubie => {
    const [faceA, faceB] = uselessToFaces.get(u.piece) ?? [];
    return {
        faceA,
        faceB,
        orientation: u.orientation as 0 | 1,
    };
};

export const cubieCubeToUselessCube = (cc: ICubieCube): IUselessCube => ({
    ulf: getUselessPieceFromCorner(cc.ulf),
    ufr: getUselessPieceFromCorner(cc.ufr),
    urb: getUselessPieceFromCorner(cc.urb),
    ubl: getUselessPieceFromCorner(cc.ubl),
    dfl: getUselessPieceFromCorner(cc.dfl),
    drf: getUselessPieceFromCorner(cc.drf),
    dbr: getUselessPieceFromCorner(cc.dbr),
    dlb: getUselessPieceFromCorner(cc.dlb),
    uf: getUselessPieceFromEdge(cc.uf),
    rf: getUselessPieceFromEdge(cc.rf),
    df: getUselessPieceFromEdge(cc.df),
    lf: getUselessPieceFromEdge(cc.lf),
    ru: getUselessPieceFromEdge(cc.ru),
    br: getUselessPieceFromEdge(cc.br),
    dr: getUselessPieceFromEdge(cc.dr),
    lu: getUselessPieceFromEdge(cc.lu),
    bl: getUselessPieceFromEdge(cc.bl),
    dl: getUselessPieceFromEdge(cc.dl),
    ub: getUselessPieceFromEdge(cc.ub),
    db: getUselessPieceFromEdge(cc.db),
});

export const uselessCubeToCubieCube = (uc: IUselessCube): ICubieCube => ({
    ulf: getCornerFromUselessPiece(uc.ulf),
    ufr: getCornerFromUselessPiece(uc.ufr),
    urb: getCornerFromUselessPiece(uc.urb),
    ubl: getCornerFromUselessPiece(uc.ubl),
    dfl: getCornerFromUselessPiece(uc.dfl),
    drf: getCornerFromUselessPiece(uc.drf),
    dbr: getCornerFromUselessPiece(uc.dbr),
    dlb: getCornerFromUselessPiece(uc.dlb),
    uf: getEdgeFromUselessPiece(uc.uf),
    rf: getEdgeFromUselessPiece(uc.rf),
    df: getEdgeFromUselessPiece(uc.df),
    lf: getEdgeFromUselessPiece(uc.lf),
    ru: getEdgeFromUselessPiece(uc.ru),
    br: getEdgeFromUselessPiece(uc.br),
    dr: getEdgeFromUselessPiece(uc.dr),
    lu: getEdgeFromUselessPiece(uc.lu),
    bl: getEdgeFromUselessPiece(uc.bl),
    dl: getEdgeFromUselessPiece(uc.dl),
    ub: getEdgeFromUselessPiece(uc.ub),
    db: getEdgeFromUselessPiece(uc.db),
});
