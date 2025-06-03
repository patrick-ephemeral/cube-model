import { Face, ICubieCube } from "./cubeDef";

export const SOLVED_CUBIE_CUBE: ICubieCube = {
    ulf: { faceA: Face.U, faceB: Face.L, faceC: Face.F, orientation: 0 },
    ufr: { faceA: Face.U, faceB: Face.F, faceC: Face.R, orientation: 0 },
    urb: { faceA: Face.U, faceB: Face.R, faceC: Face.B, orientation: 0 },
    ubl: { faceA: Face.U, faceB: Face.B, faceC: Face.L, orientation: 0 },
    dfl: { faceA: Face.D, faceB: Face.F, faceC: Face.L, orientation: 0 },
    drf: { faceA: Face.D, faceB: Face.R, faceC: Face.F, orientation: 0 },
    dbr: { faceA: Face.D, faceB: Face.B, faceC: Face.R, orientation: 0 },
    dlb: { faceA: Face.D, faceB: Face.L, faceC: Face.B, orientation: 0 },
    uf: { faceA: Face.U, faceB: Face.F, orientation: 0 },
    rf: { faceA: Face.R, faceB: Face.F, orientation: 0 },
    df: { faceA: Face.D, faceB: Face.F, orientation: 0 },
    lf: { faceA: Face.L, faceB: Face.F, orientation: 0 },
    ru: { faceA: Face.R, faceB: Face.U, orientation: 0 },
    br: { faceA: Face.B, faceB: Face.R, orientation: 0 },
    dr: { faceA: Face.D, faceB: Face.R, orientation: 0 },
    lu: { faceA: Face.L, faceB: Face.U, orientation: 0 },
    bl: { faceA: Face.B, faceB: Face.L, orientation: 0 },
    dl: { faceA: Face.D, faceB: Face.L, orientation: 0 },
    ub: { faceA: Face.U, faceB: Face.B, orientation: 0 },
    db: { faceA: Face.D, faceB: Face.B, orientation: 0 },
};
