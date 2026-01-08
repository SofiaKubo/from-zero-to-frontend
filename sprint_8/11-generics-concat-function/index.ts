// TODO: реализуйте функцию concat


function concat<T>(...args: T[][]): T[] {
  return args.flat();
};


concat(['qwerty'], ['asd']);
// ['qwerty', 'asd']

concat([1, 2, 3], [4, 5], [6, 7, 8]);
// [1, 2, 3, 4, 5, 6, 7, 8]
