// // import { configureStore } from "@reduxjs/toolkit";
// // import  searchReducer  from "./features/searchSlice";

// // export const store = configureStore({
// //     reducer:{
// //         search:searchReducer,
// //     }
// // })



// import {configureStore} from '@reduxjs/toolkit'
// import searchReducer from './features/searchSlice'
// import collectionReducer from './features/collectionSlice'


// export const store = configureStore({
//     reducer:{
//         search:searchReducer,
//         collection:collectionReducer
//     }
// })






import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import collectionReducer from './features/collectionSlice'


export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer,
    }
})