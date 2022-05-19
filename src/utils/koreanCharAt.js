export const koreanCharAt = (target) => {
  const offSet = "가".charCodeAt(0);
  if (target.charCodeAt(0) >= offSet) {
    if ((target.charCodeAt(0) - offSet) % 28 > 0) return target;
    const start =
      target.charCodeAt(0) -
      offSet -
      ((target.charCodeAt(0) - offSet) % 28) +
      offSet;
    const end = start + 27;
    const regExpString = `[${target}\\u${start.toString(16)}-\\u${end.toString(
      16
    )}]`;
    return regExpString;
  }

  return target;
};
