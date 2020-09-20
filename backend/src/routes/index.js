const Router = require("express").Router();
const UrlBuilder = require("../helpers").UrlBuilder;

const listingItemRoutes = require("./ListingItem");
const categoryRoutes = require("./Category");

Router.use(UrlBuilder.ListingItemBase, listingItemRoutes);
Router.use(UrlBuilder.CategoryBase, categoryRoutes);

module.exports = Router;