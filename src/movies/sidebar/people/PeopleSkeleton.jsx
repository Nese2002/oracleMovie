import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesSkeleton = () => {
  return (
    <div className="grid grid-cols-5">
      <Skeleton className="rounded-lg" height={100} width={160} count={10} />
    </div>
  );
};
export default ServicesSkeleton;
