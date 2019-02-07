import {Sequence} from "./Sequence";
import * as _ from "lodash";

export class SequenceFunctional implements Sequence {

    public constructor() {
    }

    public sequence(count: number, repeater: {} | Function): Array<{}> {
        const toFunction = (val, fn) => _.isFunction(val) ? val : _.bind(fn, this, val);

        return _.map(_.range(count), toFunction(repeater, _.identity));
    }

}
