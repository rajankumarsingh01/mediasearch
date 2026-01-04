

import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      
      {/* ✅ Wider container for desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        
        {/* HEADER */}
        {collection.length > 0 ? (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Your Collection
              </h2>
              <p className="text-gray-400 mt-2 text-base lg:text-lg">
                Saved media for quick access
              </p>
            </div>

            <button
              onClick={clearAll}
              className="
                w-full sm:w-auto
                px-8 py-3 rounded-xl font-medium
                bg-red-500/90 hover:bg-red-600
                transition-all duration-300
                active:scale-95
                shadow-lg shadow-red-500/30
              "
            >
              Clear Collection
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-300 mb-4">
              Collection is Empty
            </h2>
            <p className="text-gray-500 text-base sm:text-lg lg:text-xl max-w-xl">
              Start saving photos, videos & GIFs and access them anytime 🚀
            </p>
          </div>
        )}

        {/* GRID */}
        {collection.length > 0 && (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-5
              gap-6 lg:gap-8
            "
          >
            {collection.map((item, idx) => (
              <CollectionCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionPage;
