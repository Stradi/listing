const Router = require("express").Router();
const UrlBuilder = require("../helpers").UrlBuilder;

const listingItemRoutes = require("./ListingItem");

Router.use(UrlBuilder.ListingItemBase, listingItemRoutes);

module.exports = Router;