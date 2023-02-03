import Axios from "axios";
import { QueryClient } from "react-query";

// backend api request function
export default async function fetchImages(category, page) {
  // get api key from environment variable
  const api_key = process.env.REACT_APP_API_KEY;
  Axios.defaults.headers.common["Authorization"] = api_key;
  const req = await Axios.get(
    `https://api.pexels.com/v1/search?query=${category}&page=${page}&per_page=15`
  );

  return req.data;
}

//
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
