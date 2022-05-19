import { fuzzyMatchingRegExp } from "../../utils/fuzzyMathcingRegExp";
import makeMarkedString from "../../utils/makeMarkedString";
import FuzzyMatch from "../FuzzyMatch";

const SearchResult = ({ datas, searchText }) => {
  const fuzzyRegExpString = fuzzyMatchingRegExp(searchText);
  const fuzzyRegExp = new RegExp(fuzzyRegExpString);
  const filterData = datas.filter((item) => item.sickNm.match(fuzzyRegExp));
  const makeMarkedData = filterData.map((item) => {
    const result = makeMarkedString(item, fuzzyRegExpString, searchText);
    return {
      ...item,
      ...result,
    };
  });
  const sortedByDistanceData = makeMarkedData.sort((a, b) => {
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
  return (
    <div>
      <ul>
        {sortedByDistanceData.map((item) => (
          <li key={item.sickCd}>
            <FuzzyMatch
              value={item.sickNm}
              highlighted={item.highlighted}
              id={item.sickCd}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
