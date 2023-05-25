type Merge<F, S> = {
  [k in keyof F | keyof S]: k extends keyof S ? S[k] : k extends keyof F ? F[k] : never;
}

type Test = Merge<Foo, Bar>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  a: number
  b: string
};
type Bar = {
  b: number
  c: boolean
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
];
