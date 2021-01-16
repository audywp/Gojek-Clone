import {LANDING_PAGE} from './action';

const initialState = {
  dataPokedex: [],
  status: false,
};

export const LandingReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LANDING_PAGE:
      return {
        ...state,
        dataPokedex: payload,
        status: true,
      };

    default:
      return {
        ...state,
      };
  }
};
