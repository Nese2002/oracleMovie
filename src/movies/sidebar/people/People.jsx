import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import PeopleSkeleton from "./PeopleSkeleton.jsx";
import { removePerson } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
const AllPeople = lazy(() => import("./AllPeople.jsx"));

const People = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);
  const filters = savedFilters?.people || null;

  const showPeople = isClicked && (
    <div>
      <div>
        <Suspense fallback={<PeopleSkeleton />}>
          <AllPeople />
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
            onClick={() => dispatch(removePerson(filter))}>
            <h2 className="text-white">{filter[1]}</h2>
          </button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>People</h3>
      </button>
      {selectedFilter}
      {showPeople}
    </div>
  );
};
export default People;
