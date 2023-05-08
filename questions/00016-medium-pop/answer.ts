type Pop<T extends unknown[]> = T extends [...infer R, infer L] ? R : [];
type Push<T extends unknown[], U> = [...T, U];
type Shift<T extends unknown[]> = T extends [infer R, ...infer L] ? L : [];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
  Expect<Equal<Push<[3, 2, 1], 4>, [3, 2, 1, 4]>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  Expect<Equal<Shift<[]>, []>>,
];
