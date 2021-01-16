import axios from 'axios';

export const LANDING_PAGE = 'LANDING_PAGE';

export const LandingPage = () => async (dispatch) => {
  try {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
    dispatch({
      type: LANDING_PAGE,
      payload: result.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
