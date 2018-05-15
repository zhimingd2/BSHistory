import { All_HISTORY, SEARCH_HISTORY } from '../actions/index';

const INITIAL_STATE = { all: [], history: null };


export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case All_HISTORY:
            return {...state, all: action.payload };
        case SEARCH_HISTORY:
            
            return {...state, all: action.payload };
        default:
            return state;
    }
}