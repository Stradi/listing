const API_ROUTE = "api";
const API_VERSION = "v1";

const RESOURCE_LISTING_ITEM_BASE = "ListingItem";

const _baseApiRoute = () => {
  return `/${API_ROUTE}/${API_VERSION}`;
}

const _listingItemRoute = () => {
  return `${_baseApiRoute()}/${RESOURCE_LISTING_ITEM_BASE}`;
}

module.exports.BaseApiRoute = _baseApiRoute();
module.exports.ListingItemBase = _listingItemRoute();