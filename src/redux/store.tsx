

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist Config with Whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // Only persist these slices
  // whitelist: ["posts"], // Only persist these slices
};

const rootReducer = combineReducers({
//   posts: BlogReducer,   // ✅ Persists all posts
//   blog: SingleblogReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore non-serializable warnings for this action
      },
    }),
});

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Persistor
export const persistor = persistStore(store);

