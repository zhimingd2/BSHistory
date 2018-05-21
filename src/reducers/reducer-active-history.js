import { HISTORY_SELECTED } from '../actions/index';

export default function(state = null, action){
  
    //console.log('activ:' + action.payload);
    switch(action.type){
        case HISTORY_SELECTED:
            //console.log('select' + action.payload.description);
            return action.payload;
    }

    return state;
}