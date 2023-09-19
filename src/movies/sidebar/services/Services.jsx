import { useSelector } from "react-redux";
import { Suspense, useState, lazy } from "react";
import ServicesSkeleton from "./ServicesSkeleton.jsx";
import { removeService } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import { useDispatch } from "react-redux";
const AllServices = lazy(() => import("./AllServices.jsx"));

const Services = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const savedFilters = useSelector((state) => state.saveFilter);

  const filters = savedFilters?.services || null;

  const showServices = isClicked && (
    <div>
      <div>
        <Suspense fallback={<ServicesSkeleton />}>
          <AllServices />
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
          <button onClick={() => dispatch(removeService(filter))}>
            <img
              className="w-12 rounded-lg"
              src={import.meta.env.VITE_IMG_URL + filter[1]}
              alt=""
            />
          </button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>
        <h3>Services</h3>
      </button>
      {selectedFilter}
      {showServices}
    </div>
  );
};
export default Services;
