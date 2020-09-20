const API_ROUTE = "api";
const API_VERSION = "v1";

const RESOURCE_LISTING_ITEM_BASE = "ListingItem";
const RESOURCE_CATEGORY_BASE = "Category";
const RESOURCE_ACCOUNT_BASE = "Account";

const _baseApiRoute = () => {
  return `/${API_ROUTE}/${API_VERSION}`;
}

const _listingItemRoute = () => {
  return `${_baseApiRoute()}/${RESOURCE_LISTING_ITEM_BASE}`;
}

const _categoryRoute = () => {
  return `${_baseApiRoute()}/${RESOURCE_CATEGORY_BASE}`;
}

const _accountRoute = () => {
  return `${_baseApiRoute()}/${RESOURCE_ACCOUNT_BASE}`;
}

module.exports.BaseApiRoute = _baseApiRoute();
module.exports.ListingItemBase = _listingItemRoute();
module.exports.CategoryBase = _categoryRoute();
module.exports.AccountBase = _accountRoute();