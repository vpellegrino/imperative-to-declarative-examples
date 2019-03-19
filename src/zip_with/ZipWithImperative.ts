import {ZipWith} from "./ZipWith";
import * as _ from "lodash";

export class ZipWithImperative implements ZipWith {

    public constructor() {
    }

    public zipWith(fn: Function, list1: Array<{}>, list2: Array<{}>): Array<{}> {
        if (!fn || _.isEmpty(list1) || _.isEmpty(list2)) {
            return [];
        }

        const resultingList = [];
        const minLength = Math.min(list1.length, list2.length);

        for (let i = 0; i < minLength; i++) {
            resultingList.push(fn.apply(this, [list1[i], list2[i]]));
        }

        return resultingList;
    }

}