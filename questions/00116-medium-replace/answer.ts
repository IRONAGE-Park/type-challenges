type Replace<S extends string, From extends string, To extends string> =
  From extends ''
  // '' 일 때 예외 처리
    ? S // From이 공백이면 Replace 하지 않음
    : S extends `${infer Pre}${From}${infer Post}`
      ? `${Pre}${To}${Post}`
      : S

type Test = Replace<"foobarbar", "", "foo">;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];
