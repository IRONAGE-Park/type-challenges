type Blank = ' ' | '\n' | '\t';

type TrimLeft<S extends string> = S extends `${Blank}${infer Remainder}` ? TrimLeft<Remainder> : S;
type TrimRight<S extends string> = S extends `${infer Remainder}${Blank}` ? TrimRight<Remainder> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
];
