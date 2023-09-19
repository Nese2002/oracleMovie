import { useDispatch } from "react-redux";
import { addFilmStudio } from "../../../store/features/saveFilters/saveFiltersSlice";
import { getAllFilmStudios } from "../../../api_request/sidebar/allFilmStudios";

const getFilmStudios = await getAllFilmStudios();

const AllFilmStudios = () => {
  const dispatch = useDispatch();
  const filmStudios = getFilmStudios;
  const showAllFilmStudios = filmStudios.map((filmStudio) => {
    return (
      <div key={filmStudio.id}>
        <button
          className="bg-black/60 rounded-lg px-2 py-1"
          onClick={() => dispatch(addFilmStudio(filmStudio))}>
          <h1 className="text-white">{filmStudio.name}</h1>
        </button>
      </div>
    );
  });

  return <div>{showAllFilmStudios}</div>;
};
export default AllFilmStudios;
