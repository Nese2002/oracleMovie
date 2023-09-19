import { getAllGenres } from "../../../api_request/sidebar/allGenres";
import { useDispatch } from "react-redux";
import { addGenre } from "../../../store/features/saveFilters/saveFiltersSlice";

const getGenres = await getAllGenres();

const AllGenres = () => {
  const dispatch = useDispatch();
  const genres = getGenres;
  const showAllGenres = genres.map((genre) => {
    return (
      <div key={genre.id}>
        <button
          className="bg-black/60 rounded-lg px-2 py-1"
          onClick={() => dispatch(addGenre(genre))}>
          <h2 className="text-white">{genre.name}</h2>
        </button>
      </div>
    );
  });

  return <div>{showAllGenres}</div>;
};
export default AllGenres;
