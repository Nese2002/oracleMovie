import axios from "axios";
import { store } from "../../store/store";

function ritarda(tempo) {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  });
}

export const getMoviesBetweenYears = async (years) => {
  const state = store.getState();
  const sort_by = state.saveFilter.sort_by;
  try {
    //await ritarda(5000);
    const response = await axios({
      baseURL: `https://api.themoviedb.org/3/discover/movie`,
      params: {
        page: 1,
        "vote_count.gte": 150,
        sort_by: sort_by,
        "primary_release_date.gte": `${years[0]}-01-01`,
        "primary_release_date.lte": `${years[1]}-12-31`,
        api_key: import.meta.env.VITE_API_KEY,
      },
      headers: { Accept: "application/json" },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
