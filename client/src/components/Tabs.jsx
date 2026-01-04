


import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div
      className="
        flex gap-3 sm:gap-5
        px-4 sm:px-10 py-6
        overflow-x-auto
        scrollbar-hide
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`
            px-5 py-2
            rounded-full
            uppercase text-sm font-semibold
            transition-all duration-300
            whitespace-nowrap
            ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }
            active:scale-95
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
