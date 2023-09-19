import { useEffect, useState } from "react";
import { getMoviesBetweenYears } from "../../../api_request/sidebar/AllMoviesBetweenYears";
import { useSelector } from "react-redux";

const AllYears = ({ range }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getYears = async () => {
    const resp = await getMoviesBetweenYears(range);
    setIsLoading(false);
    return resp;
  };

  useEffect(() => {
    getYears().then((data) => setMovies(data));
  }, [range]);

  if (isLoading) return <div>Loading</div>;
  const showAllYears = movies.map((year) => {
    return (
      <div key={year.id}>
        <img
          className="w-[100px] h-[160px] rounded-md skew-x-12"
          src={import.meta.env.VITE_IMG_URL + year.poster_path}
          alt=""
        />
      </div>
    );
  });

  return <div className="grid grid-cols-10 gap-2">{showAllYears}</div>;
};
export default AllYears;
