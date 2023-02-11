import { selector } from "recoil";
import { dataState } from "./atom";

export const datas = selector({
    key:'dt',
    get : ({get}) => {
        const dt = get(dataState)
        return dt
    }
});