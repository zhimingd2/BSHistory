import { All_USERS } from '../actions/index';

const INITIAL_STATE = { all: [], user: null };


export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case All_USERS:
            return {...state, all: action.payload };
        default:
            return state;
    }
}