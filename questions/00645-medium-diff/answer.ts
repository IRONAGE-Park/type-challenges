type Diff<O, O1> = Pick<O & O1, Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  name: string
  age: string
};
type Bar = {
  name: string
  age: string
  gender: number
};
type Coo = {
  name: string
  gender: number
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
];
