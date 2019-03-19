import {ZipWith} from "./ZipWith";
import {ZipWithImperative} from "./ZipWithImperative";
import {ZipWithFunctional} from "./ZipWithFunctional";

describe('Zip with function', () => {
    const imperativeZipWith: ZipWith = new ZipWithImperative();
    const functionalZipWith: ZipWith = new ZipWithFunctional();

    describe('the zip with function returns an empty list ', () => {
        test('when two empty lists are passed', () => {
            expect(imperativeZipWith.zipWith(Math.max, [], [])).toEqual([]);
            expect(functionalZipWith.zipWith(Math.max, [], [])).toEqual([]);
        });

        test('when one empty list gets passed', () => {
            expect(imperativeZipWith.zipWith(Math.max, [1], [])).toEqual([]);
            expect(functionalZipWith.zipWith(Math.max, [1], [])).toEqual([]);
        });

        test('when a null function gets passed', () => {
            expect(imperativeZipWith.zipWith(null, [1], [1])).toEqual([]);
            expect(functionalZipWith.zipWith(null, [1], [1])).toEqual([]);
        });
    });

    describe('the zip with function returns a zipped list ', () => {
        test('when two lists of the same length are passed', () => {
            expect(imperativeZipWith.zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toEqual([4, 7, 7, 4, 7, 7]);
            expect(functionalZipWith.zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toEqual([4, 7, 7, 4, 7, 7]);
        });

        test('when two lists of the different length are passed, ignoring the delta elements', () => {
            expect(imperativeZipWith.zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1])).toEqual([4, 7, 7]);
            expect(functionalZipWith.zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1])).toEqual([4, 7, 7]);
        });
    });
});