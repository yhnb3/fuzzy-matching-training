const FuzzyMatch = ({ value, highlighted, id }) => {
  let highlightedIdx = 0;
  return (
    <p>
      {value.split("").map((element, idx) => {
        if (highlighted[highlightedIdx] === idx) {
          highlightedIdx += 1;
          return <strong key={`${element}-${id}- ${idx}`}>{element}</strong>;
        }
        return element;
      })}
    </p>
  );
};

export default FuzzyMatch;
