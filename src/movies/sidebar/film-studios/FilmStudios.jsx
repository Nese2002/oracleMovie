import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import { removeFilmStudio } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
import FilmStudiosSkeleton from "./FilmStudiosSkeleton.jsx";

const AllFilmStudios = lazy(() => import("./AllFilmStudios.jsx"));

const FilmStudios = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);
  const filters = savedFilters?.filmStudios || null;

  const showFilmStudios = isClicked && (
    <div>
      <div>
        <Suspense fallback={<FilmStudiosSkeleton />}>
          <AllFilmStudios />
        </Suspense>
      </div>
    </div>
  );

  const selectedFilter =
    filters != null &&
    !isClicked &&
    filters.map((filter) => {
      return (
        <div key={filter[0]}>
          <button
            className="bg-black/60 rounded-lg px-2 py-1"
            onClick={() => dispatch(removeFilmStudio(filter))}>
            <h2 className="text-white">{filter[1]}</h2>
          </button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>FilmStudios</h3>
      </button>
      {selectedFilter}
      {showFilmStudios}
    </div>
  );
};
export default FilmStudios;
