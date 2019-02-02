import {Span} from "./Span";
import * as _ from "lodash";
import * as fp from "lodash/fp";

export class SpanFunctional implements Span {

    public constructor() {
    }

    public span(arr: Array<{}>, predicate: Function): Array<Array<{}>> {
        const chunkArrayByIndex = _.partial(_.chunk, arr);
        const findIndexWherePredicateViolated = _.partial(_.findIndex, arr);
        const negatePredicate = pred => _.negate(pred);
        const checkPredicate = pred => pred instanceof Function ? pred : fp.placeholder;
        return fp.compose(chunkArrayByIndex,
            findIndexWherePredicateViolated,
            negatePredicate,
            checkPredicate)
        (predicate);
    }

}
