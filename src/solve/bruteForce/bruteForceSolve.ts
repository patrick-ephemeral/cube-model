import { SOLVED_CUBIE_CUBE } from "../../constants";
import { Face, IMove } from "../../cubeDef";
import { rotateFaceBigInt } from "../../mutation";
import { getBigIntForCube } from "../../serialization";
import { cubieCubeToUselessCube } from "../../transforms";

type Start = "START";
type End = "END";

interface IMoveChain extends IMove {
    last: Link;
    fromStart: boolean;
};

type Link = IMoveChain | Start | End;

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
];

export const bruteForceSolve = (bic: bigint): IMove[] => {

    // make a queue to hold positions to evalutate
    let cubeSpace = new Array<bigint>();

    // make a map of position hash's to links
    const linkMap = new Map<bigint, Link>();

    // add start cube to queue:
    cubeSpace.push(bic);
    linkMap.set(bic, "START");

    // add final state to queue:
    const end = getBigIntForCube(cubieCubeToUselessCube(SOLVED_CUBIE_CUBE));
    cubeSpace.push(end)
    linkMap.set(end, "END");

    // keep track for progress[]
    let head = 0;
    let cubesAnalyzed = 0;
    let fromStartCubes = 1;
    let fromEndCubes = 1;

    // while there is space to keep searching
    while (true) {

        // find place in chain
        if (head >= cubeSpace.length) {
            console.log("Search exhausted, no solution found.");
            return [];
        }
        const place = cubeSpace[head];
        head += 1;

        if (head > 1000) {
            cubeSpace = cubeSpace.slice(head);
            head = 0;
        }

        const lastLink = linkMap.get(place);
        const fromStart = (lastLink as IMoveChain).fromStart ?? lastLink === "START";

        // loop through the moves
        for (const move of MOVES) {
            // start at read and turn the cube

            const rotated = rotateFaceBigInt(place, move.face, move.clockwise, move.halfTurn);

            if (linkMap.has(rotated)) {

                // see if it connects!
                const link = linkMap.get(rotated);
                const linkFromStart = (link as IMoveChain).fromStart ?? link === "START";
                if (linkFromStart != fromStart) {
                    // WE DID IT! WE CONNECTED THE CHAINS!

                    const finalMoves: IMove[] = [];

                    // flip the order of the chain that leads to the start
                    let startChain = linkFromStart ? link : lastLink;
                    const flipper: IMove[] = [];
                    while (startChain !== "START") {
                        flipper.push({
                            face: (startChain as IMoveChain).face,
                            clockwise: (startChain as IMoveChain).clockwise,
                            halfTurn: (startChain as IMoveChain).halfTurn,
                        });
                        startChain = (startChain as IMoveChain).last;
                    }
                    while (flipper.length) {
                        finalMoves.push(flipper.pop() as IMove);
                    }

                    // add the move we just found
                    finalMoves.push({
                        face: move.face,
                        clockwise: linkFromStart ? !move.clockwise : move.clockwise,
                        halfTurn: move.halfTurn,
                    });

                    // add the end chain things, but flip clockwise
                    let endChain = linkFromStart ? lastLink : link;
                    while (endChain !== "END") {
                        finalMoves.push({
                            face: (endChain as IMoveChain).face,
                            clockwise: !(endChain as IMoveChain).clockwise,
                            halfTurn: (endChain as IMoveChain).halfTurn,
                        });
                        endChain = (endChain as IMoveChain).last;
                    }

                    // return the moves
                    return finalMoves;
                }
                // we've been here before, don't do anything

            } else {

                // this is a new position, add it to the map
                if (fromStart) { fromStartCubes += 1; } else { fromEndCubes += 1; }
                const newLink = { ...move, fromStart, last: lastLink as Link };
                cubeSpace.push(rotated);
                linkMap.set(rotated, newLink);
            }
        }

        // increment the readIndex and try again
        cubesAnalyzed += 1;
        if (!(cubesAnalyzed % 10000)) {
            console.log(`Cubes Analyzed: ${cubesAnalyzed}`);
            console.log(`Unique cubes from start: ${fromStartCubes}`);
            console.log(`Unique cubes from end: ${fromEndCubes}`);
        }
    }
};
