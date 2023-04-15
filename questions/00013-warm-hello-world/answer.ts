type HelloWorld = string // expected to be a string

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/13/answer/ko
  > 정답 보기: https://tsch.js.org/13/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
