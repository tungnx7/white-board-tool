import { ITool } from "../models/listTools.model";
import { defaultListTools } from "../variable/listToolsDefault";

export const ACTION_TYPES = {
  SET_LIST_TOOLS: "SET_LIST_TOOLS",
};

interface IAction {
  type: string;
  payload: any;
}

const initialstate: Array<ITool> = defaultListTools;

const listToolsReducer = (state = initialstate, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LIST_TOOLS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

const setListTools = (tools: Array<ITool>) => {
  return {
    type: ACTION_TYPES.SET_LIST_TOOLS,
    payload: tools,
  };
};

export { listToolsReducer, setListTools };
