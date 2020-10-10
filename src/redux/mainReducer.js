import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView136003Reducer from '../features/CalendarView136003/redux/reducers';
import EmailAuth136001Reducer from '../features/EmailAuth136001/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView136003: CalendarView136003Reducer,
EmailAuth136001: EmailAuth136001Reducer,

});