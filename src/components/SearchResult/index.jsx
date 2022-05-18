import { fuzzyMatchingRegExp } from "../../utils/fuzzyMathcingRegExp";
import FuzzyMatch from "../FuzzyMatch";

const SearchResult = ({ datas, searchText }) => {
  const fuzzyRegExpString = fuzzyMatchingRegExp(searchText);
  const fuzzyRegExp = new RegExp(fuzzyRegExpString);
  const filteredData = datas.filter((item) => item.sickNm.match(fuzzyRegExp));
  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.sickCd}>
            <FuzzyMatch
              value={item.sickNm}
              regExpString={fuzzyRegExpString}
              id={item.sickCd}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
