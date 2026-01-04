


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedia } from "../redux/features/searchThunks";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!query) return;
    dispatch(fetchMedia({ query, activeTab }));
  }, [query, activeTab, dispatch]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-lg text-gray-400 animate-pulse">
          Loading results...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-5 px-4 sm:px-10 pb-10">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;

