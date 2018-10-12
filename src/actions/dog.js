export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog,

});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error,
});