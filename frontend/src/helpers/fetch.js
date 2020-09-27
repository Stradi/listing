const _fetchListingItems = async () => {
  const response = await fetch("http://localhost:8080/api/v1/ListingItem");
  return response.json();
}

const _fetchCategories = async () => {
  const response = await fetch("http://localhost:8080/api/v1/Category");
  return response.json();
}

const _fetchItemsOfCategory = async (id) => {
  const response = await fetch("http://localhost:8080/api/v1/Category/" + id);
  return response.json();
}

export { 
  _fetchListingItems as FetchListingItems,
  _fetchCategories as FetchCategories,
  _fetchItemsOfCategory as FetchItemsOfCategory
};