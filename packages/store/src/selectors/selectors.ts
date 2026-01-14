import { atom } from "jotai";
import { countAtom } from "../atoms/atoms";

export const doubleCountSelector = atom((get) => {
    const count = get(countAtom);
    return count * 2;
});
