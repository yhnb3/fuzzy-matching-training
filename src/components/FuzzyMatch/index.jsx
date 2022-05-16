const FuzzyMatch = ({ value, regExpString }) => {
  const fuzzyRegExp = new RegExp(regExpString);
  const highlighted = new Set();
  const markString = value.replace(fuzzyRegExp, (match, ...groups) => {
    let higlightIdx = 0;
    const start = groups[groups.length - 2];
    return match
      .split("")
      .map((alpha, idx) => {
        if (groups[higlightIdx] === alpha) {
          highlighted.add(idx + start);
          higlightIdx += 1;
        }
        return alpha;
      })
      .join("");
  });
  return (
    <p>
      {markString.split("").map((element, idx) => {
        if (highlighted.has(idx)) {
          return <mark key={`${element}-${idx}`}>{element}</mark>;
        }
        return element;
      })}
    </p>
  );
};

export default FuzzyMatch;
