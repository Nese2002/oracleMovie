import axios from "axios";

function ritarda(tempo) {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  });
}

export const getAllFilmStudios = async () => {
  try {
    //await ritarda(5000);
    const response = await axios({
      baseURL: `https://getpantry.cloud/apiv1/pantry/${
        import.meta.env.VITE_PANTRY_ID
      }/basket/Production_Company`,
      headers: { Accept: "application/json" },
    });
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
