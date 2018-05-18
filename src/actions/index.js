import firebase from './fire';

export const All_HISTORY = 'All_HISTORY';
export const SEARCH_HISTORY = 'SEARCH_HISTORY';
export const HISTORY_SELECTED = 'HISTORY_SELECTED';



export function getAllHistory() {
    let messagesRef = firebase.database().ref('history').limitToLast(100);
    
    return (dispatch) =>{
        let total = [];
        messagesRef.orderByChild("date").on('value', snap => {
            messagesRef.off();
            snap.forEach( (data) => {
                const d = data.val();
                total.push(d);
            });
            const message = {
                type: All_HISTORY,
                payload: total
            };
            dispatch(message);
        });
    }
}

export function Search(SearchKey) {
    let messagesRef = firebase.database().ref('history');
    return (dispatch) =>{
        let total = [];
        messagesRef.orderByChild("date").on('value', snap => {
            //messagesRef.off();
            snap.forEach( (data) => {
                const d = data.val();
                
                console.log('SearchKey:' + SearchKey.length);
                if( d.description.toLowerCase().indexOf(SearchKey.toLowerCase())>= 0){
                    total.push(d);
                }
            });
            const message = {
                type: SEARCH_HISTORY,
                payload: total
            };
            dispatch(message);
        });
    }
}

export function selectHistory(history) {
    
    return {
        type: HISTORY_SELECTED,
        payload: history
    };
}
