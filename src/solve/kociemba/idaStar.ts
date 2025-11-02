import { ICubieCube, IMove } from "../../cubeDef";

export type CostHeuristic<Cube> = (cube: Cube) => number;
export type IsGoalState<Cube> = (cube: Cube) => boolean;
export type MoveCube<Cube> = { cube: Cube, move?: IMove };
export type Path<Cube> = MoveCube<Cube>[];
export type GetSuccessors<Cube> = (cube: Cube, lastMove?: IMove) => MoveCube<Cube>[];
export type AreEqual<Cube> = (a: Cube, b: Cube) => boolean;
export type IDA_Star<Cube> = (cube: Cube) => false | Path<Cube>;

// based implementation off pseudocode here: https://en.wikipedia.org/wiki/Iterative_deepening_A* 
export const getIDAStar = <Cube>(
    h: CostHeuristic<Cube>,
    isGoal: IsGoalState<Cube>,
    getSuccessors: GetSuccessors<Cube>,
    areEqual: AreEqual<Cube>,
): IDA_Star<Cube> => {

    const search = (
        path: Path<Cube>,
        g: number,
        bound: number,
    ): "FOUND" | number => {

        const node = path[path.length - 1];
        const f = g + h(node.cube);
        if (f > bound) return f;
        if (isGoal(node.cube)) return "FOUND";
        let min = Number.MAX_VALUE;
        const successors = getSuccessors(node.cube, node.move);
        for (const succ of successors) {
            if (!path.find(c => areEqual(c.cube, succ.cube))) {
                path.push(succ);
                const t = search(path, g + 1, bound);
                if (t === "FOUND") return t;
                if (t < min) min = t;
                path.pop();
            }
        }
        return min;
    };

    return (cube: Cube) => {
        let bound = h(cube);
        const path: Path<Cube> = [{ cube }];
        do {
            const t = search(path, 0, bound);
            if (t === "FOUND") return path;
            if (t === Number.MAX_VALUE) return false;
            bound = t;
        } while (true)
    };
};
