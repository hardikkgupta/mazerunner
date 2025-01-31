export type AlgorithmType = "DIJKSTRA" | "ASTAR" | "BFS" | "DFS";
export type MazeType = "NONE" | "BINARYTREE" | "RECURSIVEDIVISION";
export type TileType = {
    row: number;
    col: number;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isStart: boolean;
    parent: TileType | null;
}
export type GridType = TileType[][]