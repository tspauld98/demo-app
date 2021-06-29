import { combineReducers } from "redux";

import { /* ADD_COLOR_ACTION, */ REFRESH_COLORS_DONE_ACTION, /* DELETE_COLOR_ACTION */ } from "../actions/color-tool-actions";

// const initialColorList = [
//   { id: 1, colorName: "green", colorHexcode: "" },
//   { id: 2, colorName: "blue", colorHexcode: "" },
//   { id: 3, colorName: "red", colorHexcode: "" },
// ];

export const colorsReducer = ( colors = [], action ) => {
  switch(action.type) {
    case REFRESH_COLORS_DONE_ACTION:
      return action.value;
    // case ADD_COLOR_ACTION:
    //   return ([
    //     ...colors,
    //     {
    //       id: Math.max(...colors.map((c) => c.id), 0) + 1,
    //       ...action.value,
    //     },
    //   ]);
    // case DELETE_COLOR_ACTION:
    //   return ([
    //     ...colors
    //   ].filter(item => item.id !== action.value));
    default:
      return colors;
  };
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});