const dfs = (
  start,
  valueArr,
  fuzzyArr,
  inputArr,
  correctness,
  distance,
  highlighted
) => {
  if (fuzzyArr.length === 0) {
    const newHighlighted = [...highlighted];
    return [
      {
        correctness,
        distance,
        highlighted: newHighlighted,
      },
    ];
  }
  let result = [];
  let newHighlighted = [...highlighted];
  const fuzzyRegExp = new RegExp(fuzzyArr[0]);
  valueArr.forEach((alpha, idx) => {
    if (fuzzyRegExp.test(alpha)) {
      const isCorrect = alpha === inputArr[0] ? 1 : 0;
      const maxDistance = start === 0 ? 1 : Math.max(distance, idx + 1);
      newHighlighted.push(start + idx);
      const newArr = dfs(
        start + idx + 1,
        valueArr.slice(idx + 1),
        fuzzyArr.slice(1),
        inputArr.slice(1),
        correctness + isCorrect,
        maxDistance,
        newHighlighted
      );
      newHighlighted.pop();
      result = [...result, ...newArr];
    }
  });
  return result;
};

const makeMarkedString = (item, fuzzyString, searchText) => {
  const canBeMarkedArr = dfs(
    0,
    item.sickNm.split(""),
    fuzzyString.split(".*?"),
    searchText.split(""),
    0,
    1,
    []
  );
  const sortedMarkedArr = canBeMarkedArr.sort((a, b) => {
    if (a.correctness < b.correctness) {
      return 1;
    } else if (a.correctness > b.correctness) {
      return -1;
    }
    if (a.distance < b.distance) {
      return -1;
    }
    return 1;
  });
  return sortedMarkedArr[0];
};

export default makeMarkedString;
