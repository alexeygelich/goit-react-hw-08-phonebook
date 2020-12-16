import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };
const createUser = (_, { payload }) => payload.user;
const addToken = (_, { payload }) => payload.token;
const logoutUser = () => initialUserState;
const getUser = (_, { payload }) => payload;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: createUser,
  [authActions.loginSuccess]: createUser,
  [authActions.logOutSuccess]: logoutUser,
  [authActions.getCurrentUserSuccess]: getUser,
});

const token = createReducer("", {
  [authActions.registerSuccess]: addToken,
  [authActions.loginSuccess]: addToken,
  [authActions.logOutSuccess]: () => "",
});

const error = createReducer(initialUserState, {});

export default combineReducers({
  user,
  token,
  error,
});
