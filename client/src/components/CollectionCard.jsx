





import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div
      className="
        relative bg-white rounded-2xl overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        h-72 sm:h-80 lg:h-96
        group
      "
    >
      {/* Media */}
      <a target="_blank" rel="noreferrer" href={item.url} className="block h-full">
        {item.type === "photo" && (
          <img
            className="
              h-full w-full object-cover
              group-hover:scale-110
              transition-transform duration-500
            "
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
            className="
              h-full w-full object-cover
              group-hover:scale-110
              transition-transform duration-500
            "
            src={item.src}
            alt={item.title}
          />
        )}
      </a>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-4
        "
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-white text-sm sm:text-base font-semibold line-clamp-2">
            {item.title || "Untitled"}
          </h2>

          <button
            onClick={removeFromCollection}
            className="
              bg-red-500 hover:bg-red-600
              text-white text-xs sm:text-sm
              px-3 py-1.5 rounded-lg
              transition active:scale-95
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
