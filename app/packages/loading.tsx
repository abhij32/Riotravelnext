export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section (real, not skeleton) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Travel Packages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete collection of carefully curated travel
            experiences across India
          </p>
        </div>
      </div>
      {/* Packages Grid Skeleton */}
      <div className="bg-white dark:bg-gray-900 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col gap-4"
            >
              <div className="w-full h-52 bg-gray-200 dark:bg-gray-700 rounded-xl" />
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
              <ul className="space-y-2">
                {[...Array(4)].map((_, j) => (
                  <li
                    key={j}
                    className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"
                  />
                ))}
              </ul>
              <div className="w-full mt-6">
                <div className="rounded-lg h-10 w-full bg-gray-300 dark:bg-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
