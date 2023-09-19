import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import { removeOscar } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
import OscarsSkeleton from "./OscarsSkeleton.jsx";

const AllOscars = lazy(() => import("./AllOscars.jsx"));

const Oscars = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);
  const filters = savedFilters?.oscars || null;

  const showOscars = isClicked && (
    <div>
      <div>
        <Suspense fallback={<OscarsSkeleton />}>
          <AllOscars />
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
            onClick={() => dispatch(removeOscar(filter))}>
            <h2 className="text-white">{filter[1]}</h2>
          </button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>Oscars</h3>
      </button>
      {selectedFilter}
      {showOscars}
    </div>
  );
};
export default Oscars;
