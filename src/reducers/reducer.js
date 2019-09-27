import {ADD_FEATURE} from '../actions/ADD_FEATURE';
import {REMOVE_FEATURE} from '../actions/REMOVE_FEATURE';

/*const initialState = {

};*/

function reducer(state/*=intialState*/, action) {
    switch (action.type) {
        case ADD_FEATURE:
            return {}
        case REMOVE_FEATURE:
            return {}
        default:
            return state;
    }
}
