

const SearchBar = ({handleSearch, handleSearchText, handleSetSearchText}) => {
 
  return (
    <>
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        value={handleSearchText}
        onChange={(e) => {
          handleSetSearchText(e.target.value);
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        search
      </button>
    </>
  );
};

export default SearchBar;
