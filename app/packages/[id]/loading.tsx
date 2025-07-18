export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 md:px-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-8 flex flex-col md:flex-row items-start gap-8 relative">
        <div className="hidden md:block w-2 h-32 rounded-full bg-gradient-to-b from-blue-200 via-blue-100 to-green-100 shadow-lg mr-6 mt-2" />
        <div className="flex-1">
          <div className="mb-2 h-4 w-32 bg-blue-100 rounded" />
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
          <div className="h-6 w-1/2 bg-gray-100 dark:bg-gray-800 rounded mb-8" />
          <div className="h-10 w-40 bg-blue-100 rounded" />
        </div>
      </div>
      {/* Duration Skeleton */}
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-green-100 text-white px-8 py-4 rounded-2xl shadow-lg text-xl font-bold border-4 border-white dark:border-gray-800 w-64 h-10" />
      </div>
      {/* Image Carousel Skeleton */}
      <div className="mb-10 flex justify-center">
        <div className="w-full max-w-2xl h-64 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800" />
      </div>
      {/* Price Table Skeleton */}
      <div className="mb-10 bg-blue-50 dark:bg-blue-950 rounded-xl p-6 shadow-md">
        <div className="h-6 w-32 bg-blue-100 rounded mb-4" />
        <div className="h-4 w-full bg-blue-100 rounded mb-2" />
        <div className="h-4 w-3/4 bg-blue-100 rounded mb-2" />
        <div className="h-4 w-1/2 bg-blue-100 rounded" />
      </div>
      {/* Inclusions & Exclusions Skeleton */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 h-32" />
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 h-32" />
      </div>
      {/* Itinerary Skeleton */}
      <div className="mb-10 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">
        <div className="h-6 w-32 bg-blue-100 rounded mb-4" />
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
