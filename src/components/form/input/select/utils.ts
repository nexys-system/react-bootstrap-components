export const getValue = <A extends number | string>(
  v: string | undefined
): A | undefined => {
  if (v === "" || v === undefined) {
    return undefined;
  }

  const vn = Number(v);
  if (isNaN(vn)) {
    return v as A;
  }

  return vn as A;
};
