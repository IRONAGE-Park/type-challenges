type Exclude<T, K extends T> = T extends K ? never : T;

type MyOmit<T extends {}, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k]
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
};

interface Expected1 {
  title: string;
  completed: boolean;
};

interface Expected2 {
  title: string;
};
