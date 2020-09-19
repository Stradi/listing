const API_ROUTE = "api";
const API_VERSION = "v1";

const _baseApiRoute = () => {
  return `/${API_ROUTE}/${API_VERSION}/`;
}

module.exports.BaseApiRoute = _baseApiRoute();