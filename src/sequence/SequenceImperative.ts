import {Sequence} from "./Sequence";

export class SequenceImperative implements Sequence {

    public constructor() {
    }

    public sequence(count: number, repeater: {} | Function): Array<{}> {
        let generatedArray = [];
        for (let i = 0; i < count; i++) {
            if (repeater instanceof Function) {
                generatedArray.push(repeater(count, i));
            } else {
                generatedArray.push(repeater);
            }
        }
        return generatedArray;
    }

}