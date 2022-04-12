import { combineReducers } from "redux";
import { listToolsReducer } from "../reducers/listToolsReducer";

const rootReducer = combineReducers({
    listToolsState: listToolsReducer
 });
export { rootReducer };