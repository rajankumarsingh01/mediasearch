// import { createSlice } from "@reduxjs/toolkit";

// const searchSlice = createSlice({
//     name: 'search',
//     initialState: {
//         query: '',
//         activeTab: 'photos',
//         results: [],
//         loading: false,
//         error: null
//     },
//     reducers: {
//         setQuery(state, action) {
//             state.query = action.payload
//         },
//         setActiveTab(state, action) {
//             state.activeTab = action.payload
//         },
//         setresults(state, action) {
//             state.results = action.payload
//             state.loading = false
//         },
//         setLoading(state) {
//             state.loading = true
//             state.error=null
//         },

//         seterror(state, action) {
//             state.error = action.payload
//             state.loading = false
//         },
//         clearResults(state){
//             state.results = []
//         }
//     }

// })

// export const {setQuery,setActiveTab,setresults,setLoading,seterror,clearResults} = searchSlice.actions

// export default searchSlice.reducer;







import { createSlice } from "@reduxjs/toolkit";
import { fetchMedia } from "./searchThunks";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    cache: {},
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    clearResults(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ ACTUAL DATA
        state.results = action.payload.data;

        // ✅ SAVE TO CACHE ONLY IF API HIT
        if (!action.payload.fromCache) {
          state.cache[action.payload.cacheKey] = action.payload.data;
        }
      })

      .addCase(fetchMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setQuery, setActiveTab, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
