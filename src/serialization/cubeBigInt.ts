import { IUselessCube, PIECE_ID } from "../cubeDef";

export const getBigIntForCube = (uc: IUselessCube): bigint => {
    return 0n |
        (BigInt(uc.ulf.orientation) << 0n) | (BigInt(uc.ulf.piece) << 2n) |
        (BigInt(uc.ufr.orientation) << 6n) | (BigInt(uc.ufr.piece) << 8n) |
        (BigInt(uc.urb.orientation) << 12n) | (BigInt(uc.urb.piece) << 14n) |
        (BigInt(uc.ubl.orientation) << 18n) | (BigInt(uc.ubl.piece) << 20n) |
        (BigInt(uc.dfl.orientation) << 24n) | (BigInt(uc.dfl.piece) << 26n) |
        (BigInt(uc.drf.orientation) << 30n) | (BigInt(uc.drf.piece) << 32n) |
        (BigInt(uc.dbr.orientation) << 36n) | (BigInt(uc.dbr.piece) << 38n) |
        (BigInt(uc.dlb.orientation) << 42n) | (BigInt(uc.dlb.piece) << 44n) |
        (BigInt(uc.uf.orientation) << 48n) | (BigInt(uc.uf.piece - 8) << 49n) |
        (BigInt(uc.rf.orientation) << 53n) | (BigInt(uc.rf.piece - 8) << 54n) |
        (BigInt(uc.df.orientation) << 58n) | (BigInt(uc.df.piece - 8) << 59n) |
        (BigInt(uc.lf.orientation) << 63n) | (BigInt(uc.lf.piece - 8) << 64n) |
        (BigInt(uc.ru.orientation) << 68n) | (BigInt(uc.ru.piece - 8) << 69n) |
        (BigInt(uc.br.orientation) << 73n) | (BigInt(uc.br.piece - 8) << 74n) |
        (BigInt(uc.dr.orientation) << 78n) | (BigInt(uc.dr.piece - 8) << 79n) |
        (BigInt(uc.lu.orientation) << 83n) | (BigInt(uc.lu.piece - 8) << 84n) |
        (BigInt(uc.bl.orientation) << 88n) | (BigInt(uc.bl.piece - 8) << 89n) |
        (BigInt(uc.dl.orientation) << 93n) | (BigInt(uc.dl.piece - 8) << 94n) |
        (BigInt(uc.ub.orientation) << 98n) | (BigInt(uc.ub.piece - 8) << 99n) |
        (BigInt(uc.db.orientation) << 103n) | (BigInt(uc.db.piece - 8) << 104n);
};

export const fillUselessCubeFromBigInt = (uc: IUselessCube, bi: bigint): void => {
    uc.ulf.orientation = Number(bi & 3n) as 0 | 1 | 2;
    uc.ulf.piece = Number((bi >> 2n) & 15n) as PIECE_ID;
    uc.ufr.orientation = Number((bi >> 6n) & 3n) as 0 | 1 | 2;
    uc.ufr.piece = Number((bi >> 8n) & 15n) as PIECE_ID;
    uc.urb.orientation = Number((bi >> 12n) & 3n) as 0 | 1 | 2;
    uc.urb.piece = Number((bi >> 14n) & 15n) as PIECE_ID;
    uc.ubl.orientation = Number((bi >> 18n) & 3n) as 0 | 1 | 2;
    uc.ubl.piece = Number((bi >> 20n) & 15n) as PIECE_ID;
    uc.dfl.orientation = Number((bi >> 24n) & 3n) as 0 | 1 | 2;
    uc.dfl.piece = Number((bi >> 26n) & 15n) as PIECE_ID;
    uc.drf.orientation = Number((bi >> 30n) & 3n) as 0 | 1 | 2;
    uc.drf.piece = Number((bi >> 32n) & 15n) as PIECE_ID;
    uc.dbr.orientation = Number((bi >> 36n) & 3n) as 0 | 1 | 2;
    uc.dbr.piece = Number((bi >> 38n) & 15n) as PIECE_ID;
    uc.dlb.orientation = Number((bi >> 42n) & 3n) as 0 | 1 | 2;
    uc.dlb.piece = Number((bi >> 44n) & 15n) as PIECE_ID;
    uc.uf.orientation = Number((bi >> 48n) & 1n) as 0 | 1;
    uc.uf.piece = (Number((bi >> 49n) & 15n) + 8) as PIECE_ID;
    uc.rf.orientation = Number((bi >> 53n) & 1n) as 0 | 1;
    uc.rf.piece = (Number((bi >> 54n) & 15n) + 8) as PIECE_ID;
    uc.df.orientation = Number((bi >> 58n) & 1n) as 0 | 1;
    uc.df.piece = (Number((bi >> 59n) & 15n) + 8) as PIECE_ID;
    uc.lf.orientation = Number((bi >> 63n) & 1n) as 0 | 1;
    uc.lf.piece = (Number((bi >> 64n) & 15n) + 8) as PIECE_ID;
    uc.ru.orientation = Number((bi >> 68n) & 1n) as 0 | 1;
    uc.ru.piece = (Number((bi >> 69n) & 15n) + 8) as PIECE_ID;
    uc.br.orientation = Number((bi >> 73n) & 1n) as 0 | 1;
    uc.br.piece = (Number((bi >> 74n) & 15n) + 8) as PIECE_ID;
    uc.dr.orientation = Number((bi >> 78n) & 1n) as 0 | 1;
    uc.dr.piece = (Number((bi >> 79n) & 15n) + 8) as PIECE_ID;
    uc.lu.orientation = Number((bi >> 83n) & 1n) as 0 | 1;
    uc.lu.piece = (Number((bi >> 84n) & 15n) + 8) as PIECE_ID;
    uc.bl.orientation = Number((bi >> 88n) & 1n) as 0 | 1;
    uc.bl.piece = (Number((bi >> 89n) & 15n) + 8) as PIECE_ID;
    uc.dl.orientation = Number((bi >> 93n) & 1n) as 0 | 1;
    uc.dl.piece = (Number((bi >> 94n) & 15n) + 8) as PIECE_ID;
    uc.ub.orientation = Number((bi >> 98n) & 1n) as 0 | 1;
    uc.ub.piece = (Number((bi >> 99n) & 15n) + 8) as PIECE_ID;
    uc.db.orientation = Number((bi >> 103n) & 1n) as 0 | 1;
    uc.db.piece = (Number((bi >> 104n) & 15n) + 8) as PIECE_ID;
};
