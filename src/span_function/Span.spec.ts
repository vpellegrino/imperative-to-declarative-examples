import {Span} from "./Span";
import {SpanImperative} from "./SpanImperative";
import {SpanFunctional} from "./SpanFunctional";

describe('Span function', () => {
    const imperativeSpan: Span = new SpanImperative();
    const functionalSpan: Span = new SpanFunctional();

    describe('the span function returns an empty array', () => {
        test('when an undefined array and a mocked predicate function are passed', () => {
            const predicate = x => true;
            const expectedArray = [];

            expect(imperativeSpan.span(undefined, predicate)).toEqual(expectedArray);
            expect(functionalSpan.span(undefined, predicate)).toEqual(expectedArray);
        });

        test('when a non-empty array and an undefined predicate function are passed', () => {
            const inputArray = [1, 2, 3];
            const expectedArray = [];

            expect(imperativeSpan.span(inputArray, undefined)).toEqual(expectedArray);
            expect(functionalSpan.span(inputArray, undefined)).toEqual(expectedArray);
        });

        test('when a non-empty array and an identity function are passed', () => {
            const inputArray = [1, 2, 3];
            const predicate = x => x;
            const expectedArray = [];

            expect(imperativeSpan.span(inputArray, predicate)).toEqual(expectedArray);
            expect(functionalSpan.span(inputArray, predicate)).toEqual(expectedArray);
        });

    });

    describe('the span function returns a matrix with the chunked input array', () => {

        test('when a array of numbers and a predicate for even numbers are passed', () => {
            const inputArray = [2, 4, 6, 1, 8, 10];
            const predicate = x => Math.abs(x) % 2 === 0;
            const expectedMatrix = [[2, 4, 6], [1, 8, 10]];

            expect(imperativeSpan.span(inputArray, predicate)).toEqual(expectedMatrix);
            expect(functionalSpan.span(inputArray, predicate)).toEqual(expectedMatrix);
        });

        test('when a array of numbers and a predicate for numbers minor to seven', () => {
            const inputArray = [2, 4, 6, 1, 8, 10];
            const predicate = x => x < 7;
            const expectedMatrix = [[2, 4, 6, 1], [8, 10]];

            expect(imperativeSpan.span(inputArray, predicate)).toEqual(expectedMatrix);
            expect(functionalSpan.span(inputArray, predicate)).toEqual(expectedMatrix);
        });
    });

});