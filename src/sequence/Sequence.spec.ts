import {Sequence} from "./Sequence";
import {SequenceImperative} from "./SequenceImperative";
import {SequenceFunctional} from "./SequenceFunctional";

describe('Sequence generator function', () => {
    const imperativeSequence: Sequence = new SequenceImperative();
    const functionalSequence: Sequence = new SequenceFunctional();

    describe('the sequence function returns an empty array', () => {
        test('when zero is passed as first argument', () => {
            const expectedArray = [];

            expect(imperativeSequence.sequence(0, 0)).toEqual(expectedArray);
            expect(functionalSequence.sequence(0, 0)).toEqual(expectedArray);
        });
    });

    describe('the sequence function returns an array filled by the same repeated value', () => {
        test('when the second argument is a number', () => {
            const expectedArray = [1, 1, 1, 1];

            expect(imperativeSequence.sequence(4, 1)).toEqual(expectedArray);
            expect(functionalSequence.sequence(4, 1)).toEqual(expectedArray);
        });

        test('when the second argument is a string', () => {
            const expectedArray = ['s', 's', 's'];

            expect(imperativeSequence.sequence(3, 's')).toEqual(expectedArray);
            expect(functionalSequence.sequence(3, 's')).toEqual(expectedArray);
        });

        test('when the second argument is an array', () => {
            const expectedArray = [[], []];

            expect(imperativeSequence.sequence(2, [])).toEqual(expectedArray);
            expect(functionalSequence.sequence(2, [])).toEqual(expectedArray);
        });

        test('when the second argument is an object', () => {
            const expectedArray = [{'a': 1}, {'a': 1}, {'a': 1}, {'a': 1}, {'a': 1}];

            expect(imperativeSequence.sequence(5, {'a': 1})).toEqual(expectedArray);
            expect(functionalSequence.sequence(5, {'a': 1})).toEqual(expectedArray);
        });
    });

    describe('the sequence function returns an array filled by [1, 2, ..., 10]', () => {
        test('when the second argument is a function', () => {
            const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            expect(imperativeSequence.sequence(10, (x, idx) => idx + 1)).toEqual(expectedArray);
            expect(functionalSequence.sequence(10, (x, idx) => idx + 1)).toEqual(expectedArray);
        });
    });

});
