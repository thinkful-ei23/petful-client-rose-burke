import * as actions from '../actions/cat';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const catReducer = (state=initialState, action) => {
  if(action.type === actions.ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      cats: [...state.cats]
    });
  }
  else {
    return state;
  }
}; 
