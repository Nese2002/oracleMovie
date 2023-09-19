import { getAllPeople } from "../../../api_request/sidebar/allPeople";
import { useDispatch } from "react-redux";
import { addPerson } from "../../../store/features/saveFilters/saveFiltersSlice";

const getPeople = await getAllPeople();

const AllPeople = () => {
  const dispatch = useDispatch();
  const people = getPeople;
  const showAllPeople = people.map((person) => {
    return (
      <div key={person.id}>
        <button
          className="bg-black/60 rounded-lg px-2 py-1"
          onClick={() => dispatch(addPerson(person))}>
          <div className="flex">
            <img
              className="w-[100px] h-[160px] rounded-md"
              src={import.meta.env.VITE_IMG_URL + person.profile_path}
              alt=""
            />
            <div className="relative">
              <h2 className="text-white">{person.name}</h2>
              <h4 className="text-white/50 rotate-90 left-0 bottom-5 absolute ">
                {person.known_for_department}
              </h4>
            </div>
          </div>
        </button>
      </div>
    );
  });

  return <div>{showAllPeople}</div>;
};
export default AllPeople;
