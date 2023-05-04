type HaveKey<T, U> = U extends keyof T ? never : T;

type Chainable<T extends {} = {}> = {
  option<K extends string, V>(key: K, value: V): HaveKey<T, K> extends never ? Chainable<Omit<T, K> & { [k in K]: V }> : Chainable<T & { [k in K]: V }>;
  get(): T
};

/* _____________ 테스트 케이스 _____________ */
import type { Alike, Expect } from '@type-challenges/utils';

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
];

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
};

type Expected2 = {
  name: string
};

type Expected3 = {
  name: number
};
