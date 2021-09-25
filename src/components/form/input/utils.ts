/**
 * accepted string when updating the value of an numeric input
 * @param b
 * @returns
 */
export const acceptNumericValue = (b: string): boolean => {
  const r = b.match(/^-{0,1}\d*\.{0,1}\d*$/);

  return !(r === null);
};
