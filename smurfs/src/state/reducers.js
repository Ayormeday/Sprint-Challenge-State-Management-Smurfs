import * as types from "./actionTypes";

const initialSmurfData = {};

export function smurfDataReducer(state = initialSmurfData, action) {
  switch (action.type) {
    case types.GET_SMURFS_DATA:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  name: "",
  age: "",
  height: ""
};

export function form(state = initialFormState, action) {
  switch (action.type) {
    case types.POST_SMURFS_DATA:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
