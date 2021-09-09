export const getValue = (v) => {
  if (v === "" || v === void 0 || v === null) {
    return void 0;
  }
  const vn = Number(v);
  if (isNaN(vn)) {
    return v;
  }
  return vn;
};
