type MyReadonly2<T extends {}, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> & {
  readonly [k in K]: T[k];
};

/* _____________ 테스트 케이스 _____________ */
import type { Alike, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;

interface Todo1 {
  title: string
  description?: string
  completed: boolean
};

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
};

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
};
