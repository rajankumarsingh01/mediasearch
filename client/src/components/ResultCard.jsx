



import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = () => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div
      className="
        relative bg-white rounded-2xl overflow-hidden shadow-md
        w-full sm:w-[48%] md:w-[31%] lg:w-[23%]
        h-72 sm:h-80
        group
      "
    >
      {/* Media */}
      <a target="_blank" href={item.url} className="block h-full">
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}

        {item.type === "gif" && (
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            src={item.src}
            alt={item.title}
          />
        )}
      </a>

      {/* Bottom Overlay */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          px-4 py-4
          flex items-end justify-between gap-3
        "
      >
        <h2 className="text-white text-sm sm:text-base font-semibold line-clamp-2">
          {item.title || "Untitled"}
        </h2>

        <button
          onClick={addToCollection}
          className="
            bg-indigo-500 hover:bg-indigo-600
            text-white text-sm font-medium
            px-3 py-1.5 rounded-lg
            transition active:scale-95
          "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
