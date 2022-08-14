import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import listReducer from '../reducers/listOfServices';
import serviceReducer from '../reducers/serviceDetails';
import { fetchServicesEpic, getDetailsEpic } from '../epics';

const reducer = combineReducers({
  list: listReducer,
  service: serviceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(fetchServicesEpic, getDetailsEpic);

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
