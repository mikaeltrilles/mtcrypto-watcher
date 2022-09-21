export const SET_STABLE_STATE = 'SET_STABLE_STATE';


export const setStableState = (bool) => { // fonction qui va créer l'action (ici, on a une seule action)
  return (dispatch) => {
    return dispatch({ type: SET_STABLE_STATE, payload: bool }); // on retourne l'action (voir src/reducers/stable.reducer.js)
  };
};