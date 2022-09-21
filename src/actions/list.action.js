export const SET_LIST_DISPLAY = 'SET_LIST_DISPLAY'; // on définit le type de l'action (ici, SET_LIST_DISPLAY) qui sera utilisé dans le reducer (voir src/reducers/list.reducer.js)


export const setListDisplay = (bool) => { // fonction qui va créer l'action (ici, on a une seule action)
  return (dispatch) => {
    return dispatch({ type: SET_LIST_DISPLAY, payload: bool }); // on retourne l'action (voir src/reducers/list.reducer.js)
  };
};