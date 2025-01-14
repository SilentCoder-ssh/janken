export const randomElement = <A>(array: A[]): A =>
  array[~~(Math.random() * array.length)];
