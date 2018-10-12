export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST,
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = (cat) => ({
  type: ADOPT_CAT_SUCCESS,
  cat
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch('/api/cat').then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(cat => {
      dispatch(fetchCatSuccess(cat));
  }).catch(err => {
      dispatch(fetchCatError(err));
  });
};

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  fetch('/api/cat', {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    // headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    // },
}).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(cat => {
      dispatch(adoptCatSuccess(cat));
      dispatch(fetchCat());
  }).catch(err => {
      dispatch(adoptCatError(err));
  });
};