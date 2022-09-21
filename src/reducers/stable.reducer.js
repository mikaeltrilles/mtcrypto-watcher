import { SET_STABLE_STATE } from "../actions/stable.action";  // on importe le type de l'action (SET_STABLE_STATE) qui sera utilisé dans le reducer (voir src/actions/stable.action.js)

const initialState = {} // initialisation de l'état initial de l'application (vide)

export default function stableReducer(state = initialState, action) { // fonction qui va gérer les actions de l'application (ici, on a une seule action)
  switch (action.type) {
    case SET_STABLE_STATE: // si c'est SET_STABLE_STATE (voir src/actions/stable.action.js)
      return action.payload; // on retourne le payload de l'action (voir src/actions/stable.action.js)
    default:
      return state; // sinon, on retourne l'état initial
  }
}