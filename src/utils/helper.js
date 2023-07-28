export const filterData = (searchText, showAllRest) => {
    const filterData = showAllRest.filter((restaurent) =>
      restaurent?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  };  