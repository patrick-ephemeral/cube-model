import {
    Face,
    ICornerCubie,
    ICubieCube,
    IEdgeCubie,
    IStickerCube,
} from "../cubeDef";

const getCubieCornerSticker = (place: 0 | 1 | 2, corner: ICornerCubie): Face => {
    const rotated = (place + 3 - corner.orientation) % 3;
    switch (rotated) {
        case 0:
            return corner.faceA;
        case 1:
            return corner.faceB;
        case 2:
        default:
            return corner.faceC;
    }
};

const getCubieEdgeSticker = (place: 0 | 1, edge: IEdgeCubie): Face => {
    const rotated = (place + edge.orientation) % 2;
    return rotated ? edge.faceB : edge.faceA;
};

export const cubieCubeToStickerCube = (cc: ICubieCube): IStickerCube => ({
    U: {
        faceAbove: Face.B,
        faceToRight: Face.R,
        topRow: {
            leftSticker: getCubieCornerSticker(0, cc.ubl),
            centerSticker: getCubieEdgeSticker(0, cc.ub),
            rightSticker: getCubieCornerSticker(0, cc.urb),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(1, cc.lu),
            centerSticker: Face.U,
            rightSticker: getCubieEdgeSticker(1, cc.ru),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(0, cc.ulf),
            centerSticker: getCubieEdgeSticker(0, cc.uf),
            rightSticker: getCubieCornerSticker(0, cc.ufr),
        },
    },
    F: {
        faceAbove: Face.U,
        faceToRight: Face.R,
        topRow: {
            leftSticker: getCubieCornerSticker(2, cc.ulf),
            centerSticker: getCubieEdgeSticker(1, cc.uf),
            rightSticker: getCubieCornerSticker(1, cc.ufr,),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(1, cc.lf),
            centerSticker: Face.F,
            rightSticker: getCubieEdgeSticker(1, cc.rf),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(1, cc.dfl),
            centerSticker: getCubieEdgeSticker(1, cc.df),
            rightSticker: getCubieCornerSticker(2, cc.drf),
        },
    },
    R: {
        faceAbove: Face.U,
        faceToRight: Face.B,
        topRow: {
            leftSticker: getCubieCornerSticker(2, cc.ufr),
            centerSticker: getCubieEdgeSticker(0, cc.ru),
            rightSticker: getCubieCornerSticker(1, cc.urb),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(0, cc.rf),
            centerSticker: Face.R,
            rightSticker: getCubieEdgeSticker(1, cc.br),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(1, cc.drf),
            centerSticker: getCubieEdgeSticker(1, cc.dr),
            rightSticker: getCubieCornerSticker(2, cc.dbr),
        },
    },
    B: {
        faceAbove: Face.U,
        faceToRight: Face.L,
        topRow: {
            leftSticker: getCubieCornerSticker(2, cc.urb),
            centerSticker: getCubieEdgeSticker(1, cc.ub),
            rightSticker: getCubieCornerSticker(1, cc.ubl),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(0, cc.br),
            centerSticker: Face.B,
            rightSticker: getCubieEdgeSticker(0, cc.bl),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(1, cc.dbr),
            centerSticker: getCubieEdgeSticker(1, cc.db),
            rightSticker: getCubieCornerSticker(2, cc.dlb),
        },
    },
    L: {
        faceAbove: Face.U,
        faceToRight: Face.F,
        topRow: {
            leftSticker: getCubieCornerSticker(2, cc.ubl),
            centerSticker: getCubieEdgeSticker(0, cc.lu),
            rightSticker: getCubieCornerSticker(1, cc.ulf),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(1, cc.bl),
            centerSticker: Face.L,
            rightSticker: getCubieEdgeSticker(0, cc.lf),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(1, cc.dlb),
            centerSticker: getCubieEdgeSticker(1, cc.dl),
            rightSticker: getCubieCornerSticker(2, cc.dfl),
        },
    },
    D: {
        faceAbove: Face.F,
        faceToRight: Face.R,
        topRow: {
            leftSticker: getCubieCornerSticker(0, cc.dfl),
            centerSticker: getCubieEdgeSticker(0, cc.df),
            rightSticker: getCubieCornerSticker(0, cc.drf),
        },
        midRow: {
            leftSticker: getCubieEdgeSticker(0, cc.dl),
            centerSticker: Face.D,
            rightSticker: getCubieEdgeSticker(0, cc.dr),
        },
        btmRow: {
            leftSticker: getCubieCornerSticker(0, cc.dlb),
            centerSticker: getCubieEdgeSticker(0, cc.db),
            rightSticker: getCubieCornerSticker(0, cc.dbr),
        },
    },
});
