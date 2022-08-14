import types from './actionTypes';

export const fetchServicesRequest = () => ({
  type: types.fetchRequest,
});

export const fetchServicesFailure = (error) => ({
  type: types.fetchFail,
  payload: { error },
});

export const fetchServicesSuccess = (items) => ({
  type: types.fetchSuccess,
  payload: { items },
});

export const getServicesRequest = (id) => ({
  type: types.getRequest,
  payload: { id },
});

export const getServicesFailure = (error) => ({
  type: types.getFail,
  payload: { error },
});

export const getServicesSuccess = (item) => ({
  type: types.getSuccess,
  payload: { item },
});
