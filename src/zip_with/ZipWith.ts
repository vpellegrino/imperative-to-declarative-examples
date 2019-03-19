export interface ZipWith {
    zipWith(fn: Function, list1: Array<{}>, list2: Array<{}>): Array<{}>;
}