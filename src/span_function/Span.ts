export interface Span<T> {
    span(arr: Array<T>, predicate: Function): Array<Array<T>>;
}