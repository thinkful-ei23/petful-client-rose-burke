import * as actions from '../actions/dog';

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const dogReducer = (state=initialState, action) => {
  switch (action.type) { 
    case actions.FETCH_DOG_REQUEST: 
      return {...state, loading : true};
    case actions.FETCH_DOG_SUCCESS: 
      return {...state, loading : false, data: action.dog};  
    case actions.FETCH_DOG_ERROR: 
      return {...state, loading : false, error: action.error};
    case actions.ADOPT_DOG_REQUEST: 
      return {...state, loading : true};
    case actions.ADOPT_DOG_SUCCESS: 
      return {...state, loading : false};  
    case actions.ADOPT_DOG_ERROR: 
      return {...state, loading : false, error: action.error};
      default: 
      return state; 
  }     
}; 