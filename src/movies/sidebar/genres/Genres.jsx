import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import GenresSkeleton from "./GenresSkeleton.jsx";
import { removeGenre } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
const AllGenres = lazy(() => import("./AllGenres.jsx"));

const Genres = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);

  const filters = savedFilters?.genres || null;
  console.log(savedFilters);

  const showGenres = isClicked && (
    <div>
      <div>
        <Suspense fallback={<GenresSkeleton />}>
          <AllGenres />
        </Suspense>
      </div>
    </div>
  );
  const selectedFilter =
    filters != null &&
    !isClicked &&
    filters.map((filter) => {
      console.log(filter);
      return (
        <div key={filter[0]}>
          <button
            className="bg-black/60 rounded-lg px-2 py-1"
            onClick={() => dispatch(removeGenre(filter))}>
            <h2 className="text-white">{filter[1]}</h2>
          </button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>Genres</h3>
      </button>
      {selectedFilter}
      {showGenres}
    </div>
  );
};
export default Genres;
