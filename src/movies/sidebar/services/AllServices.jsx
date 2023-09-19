import { getAllServices } from "../../../api_request/sidebar/allServices";
import { useDispatch } from "react-redux";
import { addService } from "../../../store/features/saveFilters/saveFiltersSlice";

const getServices = await getAllServices();

const AllServices = () => {
  const dispatch = useDispatch();
  const services = getServices;
  const showAllServices = services.map((service) => {
    return (
      <div key={service.provider_id}>
        <button onClick={() => dispatch(addService(service))}>
          <img
            className="w-12 rounded-lg"
            src={import.meta.env.VITE_IMG_URL + service.logo_path}
            alt=""
          />
        </button>
      </div>
    );
  });

  return <div>{showAllServices}</div>;
};
export default AllServices;
