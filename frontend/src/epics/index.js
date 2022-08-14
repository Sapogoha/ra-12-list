import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import types from '../actions/actionTypes';
import {
  fetchServicesSuccess,
  fetchServicesFailure,
  getServicesSuccess,
  getServicesFailure,
} from '../actions/actionCreators';
import { of } from 'rxjs';

export const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(types.fetchRequest),
    switchMap(() =>
      ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
        map((response) => fetchServicesSuccess(response)),
        catchError((error) => of(fetchServicesFailure(error)))
      )
    )
  );

export const getDetailsEpic = (action$) =>
  action$.pipe(
    ofType(types.getRequest),
    switchMap((action) =>
      ajax
        .getJSON(`${process.env.REACT_APP_API_URL}/${action.payload.id}`)
        .pipe(
          map((response) => getServicesSuccess(response)),
          catchError((error) => of(getServicesFailure(error)))
        )
    )
  );
