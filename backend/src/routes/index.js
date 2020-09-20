const Router = require("express").Router();
const UrlBuilder = require("../helpers").UrlBuilder;

const listingItemRoutes = require("./ListingItem");
const categoryRoutes = require("./Category");
const accountRoutes = require("./Account");

Router.use(UrlBuilder.ListingItemBase, listingItemRoutes);
Router.use(UrlBuilder.CategoryBase, categoryRoutes);
Router.use(UrlBuilder.AccountBase, accountRoutes);

module.exports = Router;