import { Face, ICornerCubie, ICubieCube, IEdgeCubie, IUselessCube, IUselessPiece } from "../cubeDef";

type Cube = ICubieCube | IUselessCube;
type Corner = ICornerCubie | IUselessPiece;
type Edge = IEdgeCubie | IUselessPiece;

type CornerGetter = (c: Cube) => Corner;
const cornerGets: { [key: string]: CornerGetter } = {
    "ulf": c => c.ulf,
    "ufr": c => c.ufr,
    "urb": c => c.urb,
    "ubl": c => c.ubl,
    "dfl": c => c.dfl,
    "drf": c => c.drf,
    "dbr": c => c.dbr,
    "dlb": c => c.dlb,
};

type CornerSetter = (c: Cube, d: Corner) => void;
const cornerSets: { [key: string]: CornerSetter } = {
    "ulf": (c, d) => { c.ulf = d; },
    "ufr": (c, d) => { c.ufr = d; },
    "urb": (c, d) => { c.urb = d; },
    "ubl": (c, d) => { c.ubl = d; },
    "dfl": (c, d) => { c.dfl = d; },
    "drf": (c, d) => { c.drf = d; },
    "dbr": (c, d) => { c.dbr = d; },
    "dlb": (c, d) => { c.dlb = d; },
};

type EdgeGetter = (c: Cube) => Edge;
const edgeGets: { [key: string]: EdgeGetter } = {
    "uf": c => c.uf,
    "rf": c => c.rf,
    "df": c => c.df,
    "lf": c => c.lf,
    "ru": c => c.ru,
    "br": c => c.br,
    "dr": c => c.dr,
    "lu": c => c.lu,
    "bl": c => c.bl,
    "dl": c => c.dl,
    "ub": c => c.ub,
    "db": c => c.db,
};

type EdgeSetter = (c: Cube, d: Edge) => void;
const edgeSets: { [key: string]: EdgeSetter } = {
    "uf": (c, d) => { c.uf = d; },
    "rf": (c, d) => { c.rf = d; },
    "df": (c, d) => { c.df = d; },
    "lf": (c, d) => { c.lf = d; },
    "ru": (c, d) => { c.ru = d; },
    "br": (c, d) => { c.br = d; },
    "dr": (c, d) => { c.dr = d; },
    "lu": (c, d) => { c.lu = d; },
    "bl": (c, d) => { c.bl = d; },
    "dl": (c, d) => { c.dl = d; },
    "ub": (c, d) => { c.ub = d; },
    "db": (c, d) => { c.db = d; },
};

type CornerInst = [CornerGetter, 0 | 1 | 2, CornerSetter];
type CornRot = [CornerInst, CornerInst, CornerInst, CornerInst];
type SEFH = [string, 0 | 1 | 2, string];
type SR = [SEFH, SEFH, SEFH, SEFH];
const getCornRot = (sr: SR): [CornRot, CornRot] => [
    sr.map((sefh) => [
        cornerGets[sefh[0]],
        sefh[1],
        cornerSets[sefh[2]],
    ] as CornerInst) as CornRot,
    sr.map((sefh) => [
        cornerGets[sefh[2]],
        (3 - sefh[1]) % 3,
        cornerSets[sefh[0]],
    ] as CornerInst) as CornRot,
];
const cornerRotations: { [key: string]: [CornRot, CornRot] } = {
    [Face.R]: getCornRot([["ufr", 2, "urb"], ["drf", 1, "ufr"], ["dbr", 2, "drf"], ["urb", 1, "dbr"]]),
    [Face.F]: getCornRot([["ulf", 2, "ufr"], ["ufr", 1, "drf"], ["drf", 2, "dfl"], ["dfl", 1, "ulf"]]),
    [Face.U]: getCornRot([["ubl", 0, "urb"], ["urb", 0, "ufr"], ["ufr", 0, "ulf"], ["ulf", 0, "ubl"]]),
    [Face.L]: getCornRot([["ubl", 2, "ulf"], ["ulf", 1, "dfl"], ["dfl", 2, "dlb"], ["dlb", 1, "ubl"]]),
    [Face.B]: getCornRot([["urb", 2, "ubl"], ["ubl", 1, "dlb"], ["dlb", 2, "dbr"], ["dbr", 1, "urb"]]),
    [Face.D]: getCornRot([["dfl", 0, "drf"], ["drf", 0, "dbr"], ["dbr", 0, "dlb"], ["dlb", 0, "dfl"]]),
};

type EdgeInst = [EdgeGetter, 0 | 1, EdgeSetter];
type EdgeRot = [EdgeInst, EdgeInst, EdgeInst, EdgeInst];
type HEIF = [string, 0 | 1, string];
type AE = [HEIF, HEIF, HEIF, HEIF];
const getEdgeRot = (ae: AE): [EdgeRot, EdgeRot] => [
    ae.map((heif) => [
        edgeGets[heif[0]],
        heif[1],
        edgeSets[heif[2]]
    ] as EdgeInst) as EdgeRot,
    ae.map((heif) => [
        edgeGets[heif[2]],
        heif[1],
        edgeSets[heif[0]]
    ] as EdgeInst) as EdgeRot
];
const edgeRotations: { [key: string]: [EdgeRot, EdgeRot] } = {
    [Face.R]: getEdgeRot([["rf", 0, "ru"], ["ru", 1, "br"], ["br", 0, "dr"], ["dr", 1, "rf"]]),
    [Face.F]: getEdgeRot([["lf", 0, "uf"], ["uf", 0, "rf"], ["rf", 0, "df"], ["df", 0, "lf"]]),
    [Face.U]: getEdgeRot([["lu", 1, "ub"], ["ub", 1, "ru"], ["ru", 1, "uf"], ["uf", 1, "lu"]]),
    [Face.L]: getEdgeRot([["bl", 1, "lu"], ["lu", 0, "lf"], ["lf", 1, "dl"], ["dl", 0, "bl"]]),
    [Face.B]: getEdgeRot([["br", 1, "ub"], ["ub", 1, "bl"], ["bl", 1, "db"], ["db", 1, "br"]]),
    [Face.D]: getEdgeRot([["dl", 0, "df"], ["df", 0, "dr"], ["dr", 0, "db"], ["db", 0, "dl"]]),
};


export const rotateFace = (cub: Cube, f: Face, clockwise: boolean): void => {
    const [a, b, c, d] = cornerRotations[f][clockwise ? 0 : 1]
    const ca = a[0](cub);
    const cb = b[0](cub);
    const cc = c[0](cub);
    const cd = d[0](cub);
    ca.orientation = (ca.orientation + a[1]) % 3 as 0 | 1 | 2;
    cb.orientation = (cb.orientation + b[1]) % 3 as 0 | 1 | 2;
    cc.orientation = (cc.orientation + c[1]) % 3 as 0 | 1 | 2;
    cd.orientation = (cd.orientation + d[1]) % 3 as 0 | 1 | 2;
    a[2](cub, ca);
    b[2](cub, cb);
    c[2](cub, cc);
    d[2](cub, cd);

    const [i, j, k, l] = edgeRotations[f][clockwise ? 0 : 1]
    const ei = i[0](cub);
    const ej = j[0](cub);
    const ek = k[0](cub);
    const el = l[0](cub);
    ei.orientation = (ei.orientation + i[1]) % 2 as 0 | 1;
    ej.orientation = (ej.orientation + j[1]) % 2 as 0 | 1;
    ek.orientation = (ek.orientation + k[1]) % 2 as 0 | 1;
    el.orientation = (el.orientation + l[1]) % 2 as 0 | 1;
    i[2](cub, ei);
    j[2](cub, ej);
    k[2](cub, ek);
    l[2](cub, el);
};
