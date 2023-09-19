import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OscarSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="rounded-lg" height={20} width={200} count={10} />
    </div>
  );
};
export default OscarSkeleton;
