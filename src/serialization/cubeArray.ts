import { IUselessCube, PIECE_ID } from "../cubeDef";

export const writeUselessCubeToArray = (uc: IUselessCube, ar: number[], startIndex: number): number => {
    ar[startIndex + 0] = (uc.ulf.piece * 10) + uc.ulf.orientation;
    ar[startIndex + 1] = (uc.ufr.piece * 10) + uc.ufr.orientation;
    ar[startIndex + 2] = (uc.urb.piece * 10) + uc.urb.orientation;
    ar[startIndex + 3] = (uc.ubl.piece * 10) + uc.ubl.orientation;
    ar[startIndex + 4] = (uc.dfl.piece * 10) + uc.dfl.orientation;
    ar[startIndex + 5] = (uc.drf.piece * 10) + uc.drf.orientation;
    ar[startIndex + 6] = (uc.dbr.piece * 10) + uc.dbr.orientation;
    ar[startIndex + 7] = (uc.dlb.piece * 10) + uc.dlb.orientation;
    ar[startIndex + 8] = (uc.uf.piece * 10) + uc.uf.orientation;
    ar[startIndex + 9] = (uc.rf.piece * 10) + uc.rf.orientation;
    ar[startIndex + 10] = (uc.df.piece * 10) + uc.df.orientation;
    ar[startIndex + 11] = (uc.lf.piece * 10) + uc.lf.orientation;
    ar[startIndex + 12] = (uc.ru.piece * 10) + uc.ru.orientation;
    ar[startIndex + 13] = (uc.br.piece * 10) + uc.br.orientation;
    ar[startIndex + 14] = (uc.dr.piece * 10) + uc.dr.orientation;
    ar[startIndex + 15] = (uc.lu.piece * 10) + uc.lu.orientation;
    ar[startIndex + 16] = (uc.bl.piece * 10) + uc.bl.orientation;
    ar[startIndex + 17] = (uc.dl.piece * 10) + uc.dl.orientation;
    ar[startIndex + 18] = (uc.ub.piece * 10) + uc.ub.orientation;
    ar[startIndex + 19] = (uc.db.piece * 10) + uc.db.orientation;

    let hash = 0;

    for (let i = 0; i < 20; i++) {
        hash = (hash * 41 + ar[startIndex + i]) % Number.MAX_SAFE_INTEGER;
    }

    return hash;
};

export const fillUselessCubeFromArray = (uc: IUselessCube, ar: number[], startIndex: number): void => {
    uc.ulf.piece = ((ar[startIndex] / 10) | 0) as PIECE_ID;
    uc.ulf.orientation = ar[startIndex] % 10 as 0 | 1 | 2;
    uc.ufr.piece = ((ar[startIndex + 1] / 10) | 0) as PIECE_ID;
    uc.ufr.orientation = ar[startIndex + 1] % 10 as 0 | 1 | 2;
    uc.urb.piece = ((ar[startIndex + 2] / 10) | 0) as PIECE_ID;
    uc.urb.orientation = ar[startIndex + 2] % 10 as 0 | 1 | 2;
    uc.ubl.piece = ((ar[startIndex + 3] / 10) | 0) as PIECE_ID;
    uc.ubl.orientation = ar[startIndex + 3] % 10 as 0 | 1 | 2;
    uc.dfl.piece = ((ar[startIndex + 4] / 10) | 0) as PIECE_ID;
    uc.dfl.orientation = ar[startIndex + 4] % 10 as 0 | 1 | 2;
    uc.drf.piece = ((ar[startIndex + 5] / 10) | 0) as PIECE_ID;
    uc.drf.orientation = ar[startIndex + 5] % 10 as 0 | 1 | 2;
    uc.dbr.piece = ((ar[startIndex + 6] / 10) | 0) as PIECE_ID;
    uc.dbr.orientation = ar[startIndex + 6] % 10 as 0 | 1 | 2;
    uc.dlb.piece = ((ar[startIndex + 7] / 10) | 0) as PIECE_ID;
    uc.dlb.orientation = ar[startIndex + 7] % 10 as 0 | 1 | 2;
    uc.uf.piece = ((ar[startIndex + 8] / 10) | 0) as PIECE_ID;
    uc.uf.orientation = ar[startIndex + 8] % 10 as 0 | 1 | 2;
    uc.rf.piece = ((ar[startIndex + 9] / 10) | 0) as PIECE_ID;
    uc.rf.orientation = ar[startIndex + 9] % 10 as 0 | 1 | 2;
    uc.df.piece = ((ar[startIndex + 10] / 10) | 0) as PIECE_ID;
    uc.df.orientation = ar[startIndex + 10] % 10 as 0 | 1 | 2;
    uc.lf.piece = ((ar[startIndex + 11] / 10) | 0) as PIECE_ID;
    uc.lf.orientation = ar[startIndex + 11] % 10 as 0 | 1 | 2;
    uc.ru.piece = ((ar[startIndex + 12] / 10) | 0) as PIECE_ID;
    uc.ru.orientation = ar[startIndex + 12] % 10 as 0 | 1 | 2;
    uc.br.piece = ((ar[startIndex + 13] / 10) | 0) as PIECE_ID;
    uc.br.orientation = ar[startIndex + 13] % 10 as 0 | 1 | 2;
    uc.dr.piece = ((ar[startIndex + 14] / 10) | 0) as PIECE_ID;
    uc.dr.orientation = ar[startIndex + 14] % 10 as 0 | 1 | 2;
    uc.lu.piece = ((ar[startIndex + 15] / 10) | 0) as PIECE_ID;
    uc.lu.orientation = ar[startIndex + 15] % 10 as 0 | 1 | 2;
    uc.bl.piece = ((ar[startIndex + 16] / 10) | 0) as PIECE_ID;
    uc.bl.orientation = ar[startIndex + 16] % 10 as 0 | 1 | 2;
    uc.dl.piece = ((ar[startIndex + 17] / 10) | 0) as PIECE_ID;
    uc.dl.orientation = ar[startIndex + 17] % 10 as 0 | 1 | 2;
    uc.ub.piece = ((ar[startIndex + 18] / 10) | 0) as PIECE_ID;
    uc.ub.orientation = ar[startIndex + 18] % 10 as 0 | 1 | 2;
    uc.db.piece = ((ar[startIndex + 19] / 10) | 0) as PIECE_ID;
    uc.db.orientation = ar[startIndex + 19] % 10 as 0 | 1 | 2;
};
