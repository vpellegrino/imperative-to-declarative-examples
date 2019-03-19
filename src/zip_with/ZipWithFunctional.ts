import {ZipWith} from "./ZipWith";
import * as _ from "lodash";

export class ZipWithFunctional implements ZipWith {

    public constructor() {
    }

    public zipWith(fn: Function, list1: Array<{}>, list2: Array<{}>): Array<{}> {
        return ZipWithFunctional.isInvalidInput(fn)
            || _.map(
                ZipWithFunctional.getPairs(list1, list2),
                this.zipPair(fn, list1, list2)
            );
    }

    private static isInvalidInput(fn) {
        return !fn && [];
    }

    private static getPairs(list1: Array<{}>, list2: Array<{}>) {
        return _.range(ZipWithFunctional.getMinLength(list1, list2));
    }

    private static getMinLength(list1: Array<{}>, list2: Array<{}>) {
        return _.min([list1.length, list2.length]);
    }

    private zipPair(fn: Function, list1: Array<{}>, list2: Array<{}>) {
        return i => fn(list1[i], list2[i]);
    }
}
