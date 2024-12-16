// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 shadow-md`}
      style={{ width: "330px " }}
    >
      <div className="w-full h-0 pb-[56.25%] bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-2" />{" "}
        <div className="h-4 w-2/3 bg-gray-200 rounded-md" />{" "}
        <div className="h-4 w-1/2 bg-gray-200 rounded-md" />{" "}
        <div className="h-4 w-1/3 bg-gray-200 rounded-md" />{" "}
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 mx-auto gap-3 md:grid-cols-2 lg:grid-cols-3 ">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
