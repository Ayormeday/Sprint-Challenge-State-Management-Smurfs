import axios from "axios";
import * as types from "./actionTypes";

const smurfsApi = "http://localhost:3333/smurfs";

export function setSmurfsData(smurfsData) {
  return {
    type: types.GET_SMURFS_DATA,
    payload: smurfsData
  };
}

export const getSmurfsData = () => dispatch => {
  let smurfsData;
  axios
    .get(smurfsApi)
    .then(res => {
      smurfsData = res.data;
      dispatch(setSmurfsData(smurfsData));
    })
    .catch(error => {
      console.log(error);
    });
};

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}

export const postFormData = () => dispatch => {
  axios
    .post(smurfsApi)
    .then(smurfData =>
      dispatch({
        type: types.POST_SMURFS_DATA,
        payload: smurfData
      })
    )
    .catch(error => {
      console.log(error);
    });
};
