import {Span} from "./Span";

export class SpanImperative implements Span {

    public constructor() {
    }

    public span(arr: Array<{}>, predicate: Function): Array<Array<{}>> {
        if (this.isValidInput(arr, predicate)) {
            const first = [];
            let i;
            for (i = 0; i < arr.length; i++) {
                const predicateEval = predicate(arr[i]);
                if (predicateEval === true) {
                    first.push(arr[i]);
                } else if (predicateEval === false) {
                    break;
                } else {
                    return [];
                }
            }
            const second = arr.slice(i, arr.length);
            return [first, second];
        }
        return [];

    }

    private isValidInput(arr: Array<{}>, predicate: Function) {
        return arr instanceof Array && arr.length && predicate && predicate instanceof Function;
    }

}
