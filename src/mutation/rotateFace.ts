import { Face, ICornerCubie, ICubieCube, IEdgeCubie, IUselessCube, IUselessPiece } from "../cubeDef";

type Cube = ICubieCube | IUselessCube;
type Corner = ICornerCubie | IUselessPiece;
type Edge = IEdgeCubie | IUselessPiece;
type BiGet = (c: bigint) => bigint;
type BiSet = (c: bigint, d: bigint) => bigint;

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
const cornerBiGets: { [key: string]: BiGet } = {
    "ulf": c => c & 63n,
    "ufr": c => (c >> 6n) & 63n,
    "urb": c => (c >> 12n) & 63n,
    "ubl": c => (c >> 18n) & 63n,
    "dfl": c => (c >> 24n) & 63n,
    "drf": c => (c >> 30n) & 63n,
    "dbr": c => (c >> 36n) & 63n,
    "dlb": c => (c >> 42n) & 63n,
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
const cornerBiSets: { [key: string]: BiSet } = {
    "ulf": (c, d) => (c & ~63n) & d,
    "ufr": (c, d) => (c & ~(63n << 6n)) & (d << 6n),
    "urb": (c, d) => (c & ~(63n << 12n)) & (d << 12n),
    "ubl": (c, d) => (c & ~(63n << 18n)) & (d << 18n),
    "dfl": (c, d) => (c & ~(63n << 24n)) & (d << 24n),
    "drf": (c, d) => (c & ~(63n << 30n)) & (d << 30n),
    "dbr": (c, d) => (c & ~(63n << 36n)) & (d << 36n),
    "dlb": (c, d) => (c & ~(63n << 42n)) & (d << 42n),
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
const edgeBiGets: { [key: string]: BiGet } = {
    "uf": c => (c >> 48n) & 31n,
    "rf": c => (c >> 53n) & 31n,
    "df": c => (c >> 58n) & 31n,
    "lf": c => (c >> 63n) & 31n,
    "ru": c => (c >> 68n) & 31n,
    "br": c => (c >> 73n) & 31n,
    "dr": c => (c >> 78n) & 31n,
    "lu": c => (c >> 83n) & 31n,
    "bl": c => (c >> 88n) & 31n,
    "dl": c => (c >> 93n) & 31n,
    "ub": c => (c >> 98n) & 31n,
    "db": c => (c >> 103n) & 31n,
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
const edgeBiSets: { [key: string]: BiSet } = {
    "uf": (c, d) => (c & ~(31n << 48n)) & (d << 48n),
    "rf": (c, d) => (c & ~(31n << 53n)) & (d << 53n),
    "df": (c, d) => (c & ~(31n << 58n)) & (d << 58n),
    "lf": (c, d) => (c & ~(31n << 63n)) & (d << 63n),
    "ru": (c, d) => (c & ~(31n << 68n)) & (d << 68n),
    "br": (c, d) => (c & ~(31n << 73n)) & (d << 73n),
    "dr": (c, d) => (c & ~(31n << 78n)) & (d << 78n),
    "lu": (c, d) => (c & ~(31n << 83n)) & (d << 83n),
    "bl": (c, d) => (c & ~(31n << 88n)) & (d << 88n),
    "dl": (c, d) => (c & ~(31n << 93n)) & (d << 93n),
    "ub": (c, d) => (c & ~(31n << 98n)) & (d << 98n),
    "db": (c, d) => (c & ~(31n << 103n)) & (d << 103n),
};

type CornerInst = [CornerGetter, 0 | 1 | 2, CornerSetter];
type CornerBiInst = [BiGet, 0 | 1 | 2, BiSet];
type CornRot = [CornerInst, CornerInst, CornerInst, CornerInst];
type CornBiRot = [CornerBiInst, CornerBiInst, CornerBiInst, CornerBiInst];
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
const getCornBiRot = (sr: SR): [CornBiRot, CornBiRot] => [
    sr.map((sefh) => [
        cornerBiGets[sefh[0]],
        sefh[1],
        cornerBiSets[sefh[2]],
    ] as CornerBiInst) as CornBiRot,
    sr.map((sefh) => [
        cornerBiGets[sefh[2]],
        (3 - sefh[1]) % 3,
        cornerBiSets[sefh[0]],
    ] as CornerBiInst) as CornBiRot,
];
const srSets: { [key: string]: SR } = {
    [Face.R]: [["ufr", 2, "urb"], ["drf", 1, "ufr"], ["dbr", 2, "drf"], ["urb", 1, "dbr"]],
    [Face.F]: [["ulf", 2, "ufr"], ["ufr", 1, "drf"], ["drf", 2, "dfl"], ["dfl", 1, "ulf"]],
    [Face.U]: [["ubl", 0, "urb"], ["urb", 0, "ufr"], ["ufr", 0, "ulf"], ["ulf", 0, "ubl"]],
    [Face.L]: [["ubl", 2, "ulf"], ["ulf", 1, "dfl"], ["dfl", 2, "dlb"], ["dlb", 1, "ubl"]],
    [Face.B]: [["urb", 2, "ubl"], ["ubl", 1, "dlb"], ["dlb", 2, "dbr"], ["dbr", 1, "urb"]],
    [Face.D]: [["dfl", 0, "drf"], ["drf", 0, "dbr"], ["dbr", 0, "dlb"], ["dlb", 0, "dfl"]],
};
const cornerRotations: { [key: string]: [CornRot, CornRot] } = {
    [Face.R]: getCornRot(srSets[Face.R]),
    [Face.F]: getCornRot(srSets[Face.F]),
    [Face.U]: getCornRot(srSets[Face.U]),
    [Face.L]: getCornRot(srSets[Face.L]),
    [Face.B]: getCornRot(srSets[Face.B]),
    [Face.D]: getCornRot(srSets[Face.D]),
};
const cornerBiRotations: { [key: string]: [CornBiRot, CornBiRot] } = {
    [Face.R]: getCornBiRot(srSets[Face.R]),
    [Face.F]: getCornBiRot(srSets[Face.F]),
    [Face.U]: getCornBiRot(srSets[Face.U]),
    [Face.L]: getCornBiRot(srSets[Face.L]),
    [Face.B]: getCornBiRot(srSets[Face.B]),
    [Face.D]: getCornBiRot(srSets[Face.D]),
}

type EdgeInst = [EdgeGetter, 0 | 1, EdgeSetter];
type EdgeBiInst = [BiGet, 0 | 1, BiSet];
type EdgeRot = [EdgeInst, EdgeInst, EdgeInst, EdgeInst];
type EdgeBiRot = [EdgeBiInst, EdgeBiInst, EdgeBiInst, EdgeBiInst];
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
const getEdgeBiRot = (ae: AE): [EdgeBiRot, EdgeBiRot] => [
    ae.map((heif) => [
        edgeBiGets[heif[0]],
        heif[1],
        edgeBiSets[heif[2]]
    ] as EdgeBiInst) as EdgeBiRot,
    ae.map((heif) => [
        edgeBiGets[heif[2]],
        heif[1],
        edgeBiSets[heif[0]]
    ] as EdgeBiInst) as EdgeBiRot
];
const aeSets: { [key: string]: AE } = {
    [Face.R]: [["rf", 0, "ru"], ["ru", 1, "br"], ["br", 0, "dr"], ["dr", 1, "rf"]],
    [Face.F]: [["lf", 0, "uf"], ["uf", 0, "rf"], ["rf", 0, "df"], ["df", 0, "lf"]],
    [Face.U]: [["lu", 1, "ub"], ["ub", 1, "ru"], ["ru", 1, "uf"], ["uf", 1, "lu"]],
    [Face.L]: [["bl", 1, "lu"], ["lu", 0, "lf"], ["lf", 1, "dl"], ["dl", 0, "bl"]],
    [Face.B]: [["br", 1, "ub"], ["ub", 1, "bl"], ["bl", 1, "db"], ["db", 1, "br"]],
    [Face.D]: [["dl", 0, "df"], ["df", 0, "dr"], ["dr", 0, "db"], ["db", 0, "dl"]],
}
const edgeRotations: { [key: string]: [EdgeRot, EdgeRot] } = {
    [Face.R]: getEdgeRot(aeSets[Face.R]),
    [Face.F]: getEdgeRot(aeSets[Face.F]),
    [Face.U]: getEdgeRot(aeSets[Face.U]),
    [Face.L]: getEdgeRot(aeSets[Face.L]),
    [Face.B]: getEdgeRot(aeSets[Face.B]),
    [Face.D]: getEdgeRot(aeSets[Face.D]),
};
const edgeBiRotations: { [key: string]: [EdgeBiRot, EdgeBiRot] } = {
    [Face.R]: getEdgeBiRot(aeSets[Face.R]),
    [Face.F]: getEdgeBiRot(aeSets[Face.F]),
    [Face.U]: getEdgeBiRot(aeSets[Face.U]),
    [Face.L]: getEdgeBiRot(aeSets[Face.L]),
    [Face.B]: getEdgeBiRot(aeSets[Face.B]),
    [Face.D]: getEdgeBiRot(aeSets[Face.D]),
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

const biCornerOrientationFlips = [
    (p: bigint) => p,
    (p: bigint) => (p & [1n, 2n, 0n][p & 0b11n]),
]

export const rotateFaceBigInt = (cub: bigint, f: Face, clockwise: boolean): bigint => {
    const [a, b, c, d] = cornerBiRotations[f][clockwise ? 0 : 1]
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