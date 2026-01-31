// Опишите тип Flatten
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type Item = Flatten<[1, [2, [3, [4]]]]>;
// type Item = 1 | 4 | 2 | 3
