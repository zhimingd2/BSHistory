import { USER_SELECTED } from '../actions/index';



export default function(state = null, action){
  
    switch(action.type){
        case USER_SELECTED:
            console.log('user active:' + action.payload['Scout-Full Name']);
            return action.payload;
    }

    return state;
}