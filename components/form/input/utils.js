export const acceptNumericValue = (b) => {
  const r = b.match(/^-{0,1}\d*\.{0,1}\d*$/);
  return !(r === null);
};
