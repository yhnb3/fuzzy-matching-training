const ONLY_VOWEL = {
  ㄱ: "가".charCodeAt(0),
  ㄲ: "까".charCodeAt(0),
  ㄴ: "나".charCodeAt(0),
  ㄷ: "다".charCodeAt(0),
  ㄸ: "따".charCodeAt(0),
  ㄹ: "라".charCodeAt(0),
  ㅁ: "마".charCodeAt(0),
  ㅂ: "바".charCodeAt(0),
  ㅅ: "사".charCodeAt(0),
  ㅆ: "싸".charCodeAt(0),
  ㅇ: "아".charCodeAt(0),
  ㅈ: "자".charCodeAt(0),
  ㅉ: "짜".charCodeAt(0),
  ㅊ: "차".charCodeAt(0),
  ㅋ: "카".charCodeAt(0),
  ㅌ: "타".charCodeAt(0),
  ㅍ: "파".charCodeAt(0),
  ㅎ: "하".charCodeAt(0),
};

export const koreanCharAt = (target) => {
  const offSet = "가".charCodeAt(0);
  const vowelDiff = "까".charCodeAt(0) - "가".charCodeAt(0);
  if (ONLY_VOWEL[target]) {
    const start = ONLY_VOWEL[target];
    const end = start + vowelDiff - 1;
    const regExpString = `[${target}\\u${start.toString(16)}-\\u${end.toString(
      16
    )}]`;
    return regExpString;
  } else if (target.charCodeAt(0) >= offSet) {
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
