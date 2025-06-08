import { SOLVED_CUBIE_CUBE } from "../constants";
import { Face, ICubieCube, IMove, IStickerCube, IUselessCube } from "../cubeDef";
import { createBlankUselessCube } from "../initialization";
import { rotateFace } from "../mutation";
import { fillUselessCubeFromArray, writeUselessCubeToArray } from "../serialization";
import { cubieCubeToUselessCube, stickerCubeToCubieCube } from "../transforms";

type Start = "START";
type End = "END";

interface IMoveChain extends IMove {
    last: Link;
    fromStart: boolean;
};

type Link = IMoveChain | Start | End;

const CUBE_SPACE_SIZE = 4000000 * 5;
const MOVES: IMove[] = [
    { face: Face.R, clockwise: true },
    { face: Face.R, clockwise: false },
    { face: Face.B, clockwise: true },
    { face: Face.B, clockwise: false },
    { face: Face.L, clockwise: true },
    { face: Face.L, clockwise: false },
    { face: Face.F, clockwise: true },
    { face: Face.F, clockwise: false },
    { face: Face.U, clockwise: true },
    { face: Face.U, clockwise: false },
    { face: Face.D, clockwise: true },
    { face: Face.D, clockwise: false },
];

const solve = (uc: IUselessCube): IMove[] => {

    // make a queue to hold positions to evalutate
    const cubeSpace = new Array<number | Link>(CUBE_SPACE_SIZE);

    // make a map of position hash's to links
    const linkMap = new Map<number, Link>();

    // add start cube to queue:
    const startHash = writeUselessCubeToArray(uc, cubeSpace as number[], 0);
    cubeSpace[4] = "START";
    linkMap.set(startHash, "START");

    // add final state to queue:
    const endHash = writeUselessCubeToArray(cubieCubeToUselessCube(SOLVED_CUBIE_CUBE), cubeSpace as number[], 5);
    cubeSpace[9] = "END";
    linkMap.set(endHash, "END");

    // start the queue reading the start and end, write after them
    let readIndex = 0;
    let writeIndex = 10;
    let cubesAnalyzed = 0;
    let fromStartCubes = 1;
    let fromEndCubes = 1;
    const cube = createBlankUselessCube();

    // while there is space to keep searching
    while (true) {

        // find place in chain
        const lastLink = cubeSpace[readIndex + 4] as Link;
        const fromStart = (lastLink as IMoveChain).fromStart ?? lastLink === "START";

        // loop through the moves
        for (const move of MOVES) {
            // start at read and turn the cube
            fillUselessCubeFromArray(cube, cubeSpace as number[], readIndex);
            rotateFace(cube, move.face, move.clockwise);

            // see if this is a new position, or if it connects the chains
            var hash = writeUselessCubeToArray(cube, cubeSpace as number[], writeIndex);

            if (linkMap.has(hash)) {

                // see if it connects!
                const link = linkMap.get(hash);
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
                    });

                    // add the end chain things, but flip clockwise
                    let endChain = linkFromStart ? lastLink : link;
                    while (endChain !== "END") {
                        finalMoves.push({
                            face: (endChain as IMoveChain).face,
                            clockwise: !(endChain as IMoveChain).clockwise,
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
                const newLink = { ...move, fromStart, last: lastLink };
                cubeSpace[writeIndex + 4] = newLink;
                linkMap.set(hash, newLink);

                // increment the writeIndex
                const writeBelowRead = writeIndex < readIndex;
                writeIndex = (writeIndex + 5) % CUBE_SPACE_SIZE;
                if (writeBelowRead && writeIndex >= readIndex) {
                    throw new Error("Ran out of room");
                }
            }
        }

        // increment the readIndex and try again
        cubesAnalyzed += 1;
        if (!(cubesAnalyzed % 10000)) {
            console.log(`Cubes Analyzed: ${cubesAnalyzed}`);
            console.log(`Unique cubes from start: ${fromStartCubes}`);
            console.log(`Unique cubes from end: ${fromEndCubes}`);
        }

        readIndex = (readIndex + 5) % CUBE_SPACE_SIZE;
    }
};


export const solveStickerCube = (sc: IStickerCube): IMove[] => {
    const cubieCube = stickerCubeToCubieCube(sc);
    return solveCubieCube(cubieCube);
};

export const solveCubieCube = (cc: ICubieCube): IMove[] => {
    const uselessCube = cubieCubeToUselessCube(cc);
    return solve(uselessCube);
};