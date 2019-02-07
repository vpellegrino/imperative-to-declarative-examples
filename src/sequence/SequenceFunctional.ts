import {Sequence} from "./Sequence";
import * as _ from "lodash";

export class SequenceFunctional implements Sequence {

    public constructor() {
    }

    public sequence(count: number, repeater: {} | Function): Array<{}> {
        if (!_.isFunction(repeater)) {
            repeater = _.bind(_.identity, this, repeater);
        }
        return _.map(_.range(count), repeater);
    }

}
