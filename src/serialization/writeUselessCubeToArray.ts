import { IUselessCube } from "../cubeDef";





export const writeUselessCubeToArray = (uc: IUselessCube, ar: number[], startIndex: number) => {
    ar[startIndex + 0] = uc.ulf.piece;
    ar[startIndex + 2] = uc.ufr.piece;
    ar[startIndex + 4] = uc.urb.piece;
    ar[startIndex + 6] = uc.ubl.piece;
    ar[startIndex + 8] = uc.dfl.piece;
    ar[startIndex + 10] = uc.drf.piece;
    ar[startIndex + 12] = uc.dbr.piece;
    ar[startIndex + 14] = uc.dlb.piece;
    ar[startIndex + 16] = uc.uf.piece;
    ar[startIndex + 18] = uc.rf.piece;
    ar[startIndex + 20] = uc.df.piece;
    ar[startIndex + 22] = uc.lf.piece;
    ar[startIndex + 24] = uc.ru.piece;
    ar[startIndex + 26] = uc.br.piece;
    ar[startIndex + 28] = uc.dr.piece;
    ar[startIndex + 30] = uc.lu.piece;
    ar[startIndex + 32] = uc.bl.piece;
    ar[startIndex + 34] = uc.dl.piece;
    ar[startIndex + 36] = uc.ub.piece;
    ar[startIndex + 38] = uc.db.piece;

};
