import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView136003Saga from '../features/CalendarView136003/redux/sagas';
import EmailAuth136001Saga from '../features/EmailAuth136001/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView136003Saga,
EmailAuth136001Saga,
    
  ]);
}