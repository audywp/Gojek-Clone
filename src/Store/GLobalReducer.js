import {SET_PROFILE} from './action';

const intialState = {
  name: '',
  balance: '',
};

export const GlobalReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        balance: action.payload.balance,
      };

    default:
      return {
        ...state,
      };
  }
};
