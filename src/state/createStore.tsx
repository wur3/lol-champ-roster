import { configureStore } from "@reduxjs/toolkit";
import champReducer from '../reducers/Champ';
import versionReducer from '../reducers/Version';
import languageReducer from '../reducers/Language';


// Instantiating store in `wrapRootElement` handler ensures:
//  - there is fresh store for each SSR page
//  - it will be called only once in browser, when React mounts
export const store = configureStore({
  reducer: {
    champ: champReducer,
    version: versionReducer,
    language: languageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch