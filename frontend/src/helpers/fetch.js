import axios from "axios";

const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    axios("http://localhost:8080/api/v1/Category").then((response) => {
      resolve(response.data.content.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

//TODO: Add FetchListingItem

export { fetchCategories as FetchCategories };