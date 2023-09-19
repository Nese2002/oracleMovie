import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import { removeYear } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
import Slider from "./Slider.jsx";
// const AllYears = lazy(() => import(`./AllYears?jsx`));

const Years = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);

  const filters = savedFilters?.years || null;

  const showYears = isClicked && (
    <div>
      <div>
        {/* <Suspense fallback={<div>Loading</div>}>
          <AllYears filter={filters} />
        </Suspense> */}
        <Slider />
      </div>
    </div>
  );

  const selectedFilter = filters != null && !isClicked && (
    <button
      className="bg-black/60 rounded-lg px-2 py-1"
      onClick={() => dispatch(removeYear(filters))}>
      <h2 className="text-white">
        <span>{filters[0]}</span>
        <span>-</span>
        <span>{filters[1]}</span>
      </h2>
    </button>
  );

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>Years</h3>
      </button>
      {selectedFilter}
      {showYears}
    </div>
  );
};

export default Years;
