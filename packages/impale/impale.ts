export type ImpaleResult<T> =
  | {
      ok: true;
      res: T;
    }
  | {
      ok: false;
      res: null;
    };

const err = (value): ImpaleResult<typeof value> => ({
  res: null,
  ok: false,
});

const ok = (value): ImpaleResult<typeof value> => ({
  res: value,
  ok: true,
});

const _try = <T>(fn: Function): ImpaleResult<T> => {
  try {
    const res = fn();
    return { res, ok: true };
  } catch (err) {
    return { res: null, ok: false };
  }
};

export const impale = {
  ok,
  err,
  try: _try,
};
