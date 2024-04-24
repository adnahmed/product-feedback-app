import { createTools, Tailwindest } from "tailwindest";

export type TailwindCustom = Tailwindest<{
  color:
    | "purple"
    | "red"
    | "blue"
    | "blue-light"
    | "blue-lighter"
    | "blue-lightest"
    | "orange-light"
    | "gray"
    | "gray-light"
    | "gray-dark"
    | "blue-dark-1"
    | "blue-dark-2";
}>;

export const tw = createTools<TailwindCustom>();
