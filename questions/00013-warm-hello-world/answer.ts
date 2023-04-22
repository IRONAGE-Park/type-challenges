type HelloWorld = string;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils';

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
];
