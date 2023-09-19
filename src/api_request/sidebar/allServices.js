import axios from "axios";

function ritarda(tempo) {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  });
}

export const getAllServices = async () => {
  try {
    //await ritarda(5000);
    const response = await axios({
      baseURL: `https://api.themoviedb.org/3/watch/providers/movie`,
      params: {
        watch_region: "US",
        api_key: import.meta.env.VITE_API_KEY,
      },
      headers: { Accept: "application/json" },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
