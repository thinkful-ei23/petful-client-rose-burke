export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat,

});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error,
});