import * as actions from './actions/dog';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const dogReducer = (state=initialState, action) => {
  if(action.type === actions.ADOPT_DOG_REQUEST) {
    return Object.assign({}, state, {
      dogs: [...state.dogs]
    });
  }
  else {
    return state;
  }
}; 