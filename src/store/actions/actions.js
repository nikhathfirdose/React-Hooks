import * as ACTION_TYPE from "./action_type";

export const SUCCESS = {
  type: ACTION_TYPE.SUCCESS,
};
export const FAILURE = {
  type: ACTION_TYPE.FAILURE,
};
// ACtion creators - the function that return js object

export const success = () => {
  return {
    type: ACTION_TYPE.SUCCESS,
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPE.FAILURE,
  };
};
