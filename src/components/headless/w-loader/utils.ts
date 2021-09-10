export const isNullType = <A, NullType>(
  x: A | NullType,
  nullPlaceholder: NullType
): x is A => x !== nullPlaceholder;
