import { IMove, Face, PIECE_ID } from "../../cubeDef";
import { createBlankCubieCube, createBlankUselessCube } from "../../initialization";
import { rotateFaceBigInt } from "../../mutation";
import { fillUselessCubeFromBigInt } from "../../serialization";
import { uselessCubeToCubieCube } from "../../transforms";
import { AreEqual, CostHeuristic, GetSuccessors, IsGoalState, MoveCube } from "./idaStar";

interface IBigintParts {
    areEqual: AreEqual<bigint>;
    getSuccessors: GetSuccessors<bigint>;
    isGoalState: IsGoalState<bigint>;
    //costHeuristic: CostHeuristic<bigint>;
}

const areEqual: AreEqual<bigint> = (a, b) => a === b;

const MOVES: IMove[] = [
    { face: Face.R, clockwise: true, halfTurn: true },
    { face: Face.R, clockwise: false, halfTurn: true },
    { face: Face.B, clockwise: true, halfTurn: true },
    { face: Face.B, clockwise: false, halfTurn: true },
    { face: Face.L, clockwise: true, halfTurn: true },
    { face: Face.L, clockwise: false, halfTurn: true },
    { face: Face.F, clockwise: true, halfTurn: true },
    { face: Face.F, clockwise: false, halfTurn: true },
    { face: Face.U, clockwise: true, halfTurn: true },
    { face: Face.U, clockwise: false, halfTurn: true },
    { face: Face.D, clockwise: true, halfTurn: true },
    { face: Face.D, clockwise: false, halfTurn: true },

    { face: Face.R, clockwise: true, halfTurn: false },
    { face: Face.B, clockwise: true, halfTurn: false },
    { face: Face.L, clockwise: true, halfTurn: false },
    { face: Face.F, clockwise: true, halfTurn: false },
    { face: Face.U, clockwise: true, halfTurn: false },
    { face: Face.D, clockwise: true, halfTurn: false },
];



const getSuccessors: GetSuccessors<bigint> = (cube, lastMove) => {
    const successors: MoveCube<bigint>[] = [];

    for (const move of MOVES) {
        if (lastMove) {
            // if the last move is given, don't include the moves that just undo the last move in successors
            if (lastMove.halfTurn && lastMove.face === move.face && move.halfTurn && lastMove.clockwise !== move.halfTurn) {
                continue;
            }
            if (!lastMove.halfTurn && !move.halfTurn && lastMove.face === move.face) {
                continue;
            }
        }

        successors.push({
            cube: rotateFaceBigInt(cube, move.face, move.clockwise, move.halfTurn),
            move,
        });
    }

    return successors;
}

// the pieces which should be in the middle layer of the cube
const PIECES_IN_HAMBURGER: Set<PIECE_ID> = new Set([9, 13, 16, 11]);

export const getBigIntPartsForG1 = (): IBigintParts => {

    const scratch = createBlankUselessCube();

    const isGoalState: IsGoalState<bigint> = (cube) => {

        // fill a cube
        fillUselessCubeFromBigInt(scratch, cube);

        // see if hamburger pieces are in the right spot
        if (!PIECES_IN_HAMBURGER.has(scratch.rf.piece)
            || !PIECES_IN_HAMBURGER.has(scratch.br.piece)
            || !PIECES_IN_HAMBURGER.has(scratch.bl.piece)
            || !PIECES_IN_HAMBURGER.has(scratch.lf.piece)) {
            return false;
        }

        if (badHamburger) {
            return false;
        }


        return false;
    }



    return {
        areEqual,
        getSuccessors,
        isGoalState,
    };
};
