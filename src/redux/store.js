import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";
import authReducer from "./auth/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
