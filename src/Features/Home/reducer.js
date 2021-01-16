const initalState = {
  isLogged: false,
  loading: false,
};

export const HomeReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
