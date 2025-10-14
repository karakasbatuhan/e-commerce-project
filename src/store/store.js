import { legacy_createStore } from "redux";
import { settingsReducer } from "./reducers/settingsReducer";

export const store = legacy_createStore(settingsReducer);