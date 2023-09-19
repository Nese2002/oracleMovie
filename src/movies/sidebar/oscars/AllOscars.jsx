import { useDispatch } from "react-redux";
import { addOscar } from "../../../store/features/saveFilters/saveFiltersSlice";
import { getAllOscars } from "../../../api_request/sidebar/allOscars";
// import oscars from "./oscarCategory.json";

const getOscars = await getAllOscars();

const AllOscars = () => {
  const dispatch = useDispatch();
  const oscars = getOscars;
  const showAllOscars = oscars.map((oscar) => {
    return (
      <div key={oscar.id}>
        <button
          className="bg-black/60 rounded-lg px-2 py-1"
          onClick={() => dispatch(addOscar(oscar))}>
          <h1 className="text-white">{oscar.name}</h1>
        </button>
      </div>
    );
  });

  return <div>{showAllOscars}</div>;
};
export default AllOscars;
