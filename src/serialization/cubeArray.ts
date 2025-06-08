import { IUselessCube, PIECE_ID } from "../cubeDef";

export const writeUselessCubeToArray = (uc: IUselessCube, ar: number[], startIndex: number): number => {

    const cornersA = 0 |
        (uc.ulf.orientation << 0) | (uc.ulf.piece << 2) |
        (uc.ufr.orientation << 6) | (uc.ufr.piece << 8) |
        (uc.urb.orientation << 12) | (uc.urb.piece << 14) |
        (uc.ubl.orientation << 18) | (uc.ubl.piece << 20);

    const cornersB = 0 |
        (uc.dfl.orientation << 0) | (uc.dfl.piece << 2) |
        (uc.drf.orientation << 6) | (uc.drf.piece << 8) |
        (uc.dbr.orientation << 12) | (uc.dbr.piece << 14) |
        (uc.dlb.orientation << 18) | (uc.dbr.piece << 20);

    const edgesA = 0 |
        (uc.uf.orientation << 0) | ((uc.uf.piece - 8) << 1) |
        (uc.rf.orientation << 5) | ((uc.rf.piece - 8) << 6) |
        (uc.df.orientation << 10) | ((uc.df.piece - 8) << 11) |
        (uc.lf.orientation << 15) | ((uc.lf.piece - 8) << 16) |
        (uc.ru.orientation << 20) | ((uc.ru.piece - 8) << 21) |
        (uc.br.orientation << 25) | ((uc.br.piece - 8) << 26);

    const edgesB = 0 |
        (uc.dr.orientation << 0) | ((uc.dr.piece - 8) << 1) |
        (uc.lu.orientation << 5) | ((uc.lu.piece - 8) << 6) |
        (uc.bl.orientation << 10) | ((uc.bl.piece - 8) << 11) |
        (uc.dl.orientation << 15) | ((uc.dl.piece - 8) << 16) |
        (uc.ub.orientation << 20) | ((uc.ub.piece - 8) << 21) |
        (uc.db.orientation << 25) | ((uc.db.piece - 8) << 26);

    ar[startIndex + 0] = cornersA;
    ar[startIndex + 1] = cornersB;
    ar[startIndex + 2] = edgesA;
    ar[startIndex + 3] = edgesB;

    let h = 2166136261; // FNV offset basis
    h ^= cornersA; h = Math.imul(h, 16777619);
    h ^= cornersB; h = Math.imul(h, 16777619);
    h ^= edgesA; h = Math.imul(h, 16777619);
    h ^= edgesB; h = Math.imul(h, 16777619);
    return h >>> 0; // force unsigned
};

export const fillUselessCubeFromArray = (uc: IUselessCube, ar: number[], startIndex: number): void => {

    const cornersA = ar[startIndex + 0];
    const cornersB = ar[startIndex + 1]
    const edgesA = ar[startIndex + 2];
    const edgesB = ar[startIndex + 3];

    uc.ulf.orientation = (cornersA & 3) as 0 | 1 | 2;
    uc.ulf.piece = ((cornersA >> 2) & 7) as PIECE_ID;
    uc.ufr.orientation = ((cornersA >> 6) & 3) as 0 | 1 | 2;
    uc.ufr.piece = ((cornersA >> 8) & 7) as PIECE_ID;
    uc.urb.orientation = ((cornersA >> 12) & 3) as 0 | 1 | 2;
    uc.urb.piece = ((cornersA >> 14) & 7) as PIECE_ID;
    uc.ubl.orientation = ((cornersA >> 18) & 3) as 0 | 1 | 2;
    uc.ubl.piece = ((cornersA >> 20) & 7) as PIECE_ID;

    uc.dfl.orientation = (cornersB & 3) as 0 | 1 | 2;
    uc.dfl.piece = ((cornersB >> 2) & 7) as PIECE_ID;
    uc.drf.orientation = ((cornersB >> 6) & 3) as 0 | 1 | 2;
    uc.drf.piece = ((cornersB >> 8) & 7) as PIECE_ID;
    uc.dbr.orientation = ((cornersB >> 12) & 3) as 0 | 1 | 2;
    uc.dbr.piece = ((cornersB >> 14) & 7) as PIECE_ID;
    uc.dlb.orientation = ((cornersB >> 18) & 3) as 0 | 1 | 2;
    uc.dlb.piece = ((cornersB >> 20) & 7) as PIECE_ID;

    uc.uf.orientation = (edgesA & 1) as 0 | 1;
    uc.uf.piece = (((edgesA >> 1) & 7) + 8) as PIECE_ID;
    uc.rf.orientation = ((edgesA >> 5) & 1) as 0 | 1;
    uc.rf.piece = (((edgesA >> 6) & 7) + 8) as PIECE_ID;
    uc.df.orientation = ((edgesA >> 10) & 1) as 0 | 1;
    uc.df.piece = (((edgesA >> 11) & 7) + 8) as PIECE_ID;
    uc.lf.orientation = ((edgesA >> 15) & 1) as 0 | 1;
    uc.lf.piece = (((edgesA >> 16) & 7) + 8) as PIECE_ID;
    uc.ru.orientation = ((edgesA >> 20) & 1) as 0 | 1;
    uc.ru.piece = (((edgesA >> 21) & 7) + 8) as PIECE_ID;
    uc.br.orientation = ((edgesA >> 25) & 1) as 0 | 1;
    uc.br.piece = (((edgesA >> 26) & 7) + 8) as PIECE_ID;

    uc.dr.orientation = (edgesB & 1) as 0 | 1;
    uc.dr.piece = (((edgesB >> 1) & 7) + 8) as PIECE_ID;
    uc.lu.orientation = ((edgesB >> 5) & 1) as 0 | 1;
    uc.lu.piece = (((edgesB >> 6) & 7) + 8) as PIECE_ID;
    uc.bl.orientation = ((edgesB >> 10) & 1) as 0 | 1;
    uc.bl.piece = (((edgesB >> 11) & 7) + 8) as PIECE_ID;
    uc.dl.orientation = ((edgesB >> 15) & 1) as 0 | 1;
    uc.dl.piece = (((edgesB >> 16) & 7) + 8) as PIECE_ID;
    uc.ub.orientation = ((edgesB >> 20) & 1) as 0 | 1;
    uc.ub.piece = (((edgesB >> 21) & 7) + 8) as PIECE_ID;
    uc.db.orientation = ((edgesB >> 25) & 1) as 0 | 1;
    uc.db.piece = (((edgesB >> 26) & 7) + 8) as PIECE_ID;
};
