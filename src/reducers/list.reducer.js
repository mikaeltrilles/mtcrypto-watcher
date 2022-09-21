import { SET_LIST_DISPLAY } from "../actions/list.action";

const initialState = {} // initialisation de l'état initial de l'application (vide)

export default function listReducer(state = initialState, action) { // fonction qui va gérer les actions de l'application (ici, on a une seule action)
  switch (action.type) { // on vérifie le type de l'action 
    case SET_LIST_DISPLAY: // si c'est SET_LIST_DISPLAY (voir src/actions/list.action.js)
      return action.payload; // on retourne le payload de l'action (voir src/actions/list.action.js)
    default:
      return state; // sinon, on retourne l'état initial sans le modifier
  }
}