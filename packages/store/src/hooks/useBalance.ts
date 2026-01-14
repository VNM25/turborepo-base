import { useAtom } from "jotai";
import { balanceAtom } from "../atoms/balance"

export const useBalance = () => {
    const value = useAtom(balanceAtom);
    return value;
}
