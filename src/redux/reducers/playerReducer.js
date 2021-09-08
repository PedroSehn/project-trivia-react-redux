import { LOGIN } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, token: action.token, name: action.name, email: action.email };
  default:
    return state;
  }
};

export default playerReducer;
