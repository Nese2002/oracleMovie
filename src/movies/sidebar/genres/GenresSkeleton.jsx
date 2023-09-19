import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenresSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="rounded-lg" height={32} width={80} count={10} />
    </div>
  );
};
export default GenresSkeleton;
