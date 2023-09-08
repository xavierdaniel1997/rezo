import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBar = ({handleSearch, handleSearchText, handleSetSearchText}) => {
 
  return (
    <>
      <input
        className="w-72 outline-none text-lg text-gray-600"
        data-testid="serchInput"
        type="text"
        placeholder="Search"
        value={handleSearchText}
        onChange={(e) => {
          handleSetSearchText(e.target.value);
        }}
      />
      <button data-testid="searchBtn" className="text-gray-400 text-lg cursor-pointer" onClick={handleSearch}>
      
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </>
  );
};

export default SearchBar;
