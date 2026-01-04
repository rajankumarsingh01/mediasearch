




import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <section className="bg-(--c1)">
      <form
        onSubmit={submitHandler}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      >
        <div
          className="
            flex items-center gap-3
            bg-white/10 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            px-4 py-3
            shadow-lg
          "
        >
          {/* Icon */}
          <Search className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

          {/* Input */}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            type="text"
            placeholder="Search photos, videos, GIFs..."
            className="
              flex-1 bg-transparent
              text-sm sm:text-lg
              text-white placeholder-gray-400
              outline-none
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              px-4 sm:px-6 py-2
              rounded-xl
              font-medium text-sm sm:text-base
              bg-blue-500 text-white
              hover:bg-blue-600
              transition-all duration-300
              active:scale-95
              shadow-md shadow-blue-500/30
            "
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
