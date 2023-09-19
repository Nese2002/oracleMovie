import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="rounded-lg" height={48} width={48} count={10} />
    </div>
  );
};
export default ServicesSkeleton;
