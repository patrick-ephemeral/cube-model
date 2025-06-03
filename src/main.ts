export * from "./cubeDef";
export * from "./constants";

export const hello = (str: string): string => `Hello, ${str}!`;

export interface ICube {
    title: string;
}