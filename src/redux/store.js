import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";
import authReducer from "./auth/authReducer";

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: authReducer,
  },
});

export default store;
