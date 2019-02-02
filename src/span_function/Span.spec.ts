import {Span} from "./Span";
import {ImperativeSpan} from "./ImperativeSpan";

describe('Span function', () => {
    const imperativeSpan: Span<number> = new ImperativeSpan();

    describe('the span function returns an empty matrix', () => {
        test('when an undefined array and a mocked predicate function are passed', () => {
            expect(imperativeSpan.span(undefined, x => true)).toEqual([[]]);
        });

        test('when a non-empty array and an undefined predicate function are passed', () => {
            expect(imperativeSpan.span([1, 2, 3], undefined)).toEqual([[]]);
        });


    });

    describe('the span function returns a matrix with the chunked input array', () => {
        test('when a non-empty array and an identity function are passed', () => {
            expect(imperativeSpan.span([1, 2, 3], x => x)).toEqual([[1, 2, 3], []]);
        });

        test('when a array of numbers and a predicate for even numbers are passed', () => {
            expect(imperativeSpan.span([2, 4, 6, 1, 8, 10], x => Math.abs(x) % 2 === 0)).toEqual([[2, 4, 6], [1, 8, 10]]);
        });

        test('when a array of numbers and a predicate for numbers minor to seven', () => {
            expect(imperativeSpan.span([2, 4, 6, 1, 8, 10], x => x < 7)).toEqual([[2, 4, 6, 1], [8, 10]]);
        });
    });

});