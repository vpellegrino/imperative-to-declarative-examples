import {Span} from "./Span";

export class ImperativeSpan<T> implements Span<T> {

    public constructor() {
    }

    public span(arr: Array<T>, predicate: Function): Array<Array<T>> {
        if (this.isValidInput(arr, predicate)) {
            const first = [];
            let i;
            for (i = 0; i < arr.length; i++) {
                if (predicate(arr[i])) {
                    first.push(arr[i]);
                } else {
                    break;
                }
            }
            const second = arr.slice(i, arr.length);
            return [first, second];
        }
        return [[]];

    }

    private isValidInput(arr: Array<T>, predicate: Function) {
        return arr instanceof Array && arr.length && predicate && predicate instanceof Function;
    }

}
