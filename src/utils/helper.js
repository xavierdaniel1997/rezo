export const filterData = (searchText, showAllRest) => {
    const filterData = showAllRest.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  };