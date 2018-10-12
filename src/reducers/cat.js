import * as actions from '../actions/cat';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const catReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CAT_REQUEST:
      return {...state, loading : true};
    case actions.FETCH_CAT_SUCCESS:
      return {...state, data: action.cat, error: null, loading: false};
    case actions.FETCH_CAT_ERROR:
      return {...state, loading: false, error: action.error};
    case actions.ADOPT_CAT_REQUEST:
      return {...state, loading : true};
    case actions.ADOPT_CAT_SUCCESS:
      return {...state, error: null, loading: false};
    case actions.ADOPT_CAT_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
}; 
