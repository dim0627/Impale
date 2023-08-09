export type ImpaleResult<T> =
  | {
      ok: true;
      res: () => T;
    }
  | {
      ok: false;
      res: null;
    };

const error = (value): ImpaleResult<typeof value> => ({
  res: value,
  ok: false,
});

const ok = (value): ImpaleResult<typeof value> => ({
  res: () => value,
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
  error,
  try: _try,
};
