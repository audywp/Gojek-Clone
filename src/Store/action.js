export const SET_PROFILE = 'SET_PROFILE';

export const ActionSetProfile = (data) => (dispatch) => {
  dispatch({
    type: SET_PROFILE,
    payload: data,
  });
};
