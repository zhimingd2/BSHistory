import firebase from './fire';

export const All_HISTORY = 'All_HISTORY';
export const All_USERS = 'All_USERS';
export const SEARCH_HISTORY = 'SEARCH_HISTORY';
export const HISTORY_SELECTED = 'HISTORY_SELECTED';
export const USER_SELECTED = 'USER_SELECTED';



export function getAllHistory(sortAscending) {
    let messagesRef = firebase.database().ref('history');
    
    return (dispatch) =>{
        let total = [];
        let ref = messagesRef.orderByChild("date");
        ref.on('value', snap => {
            messagesRef.off();
            snap.forEach( (data) => {
                const d = data.val();
                total.push(d);
            });
            const message = {
                type: All_HISTORY,
                payload: sortAscending ? total : total.reverse()
            };
            dispatch(message);
        });
    }
}

export function getAllUsers() {
    let messagesRef = firebase.database().ref('user');
    
    return (dispatch) =>{
        let total = [];
        messagesRef.on('value', snap => {
            messagesRef.off();
            snap.forEach( (data) => {
                const d = data.val();
                console.log(d['Scout-Full Name']);
                total.push(d);
            });
            const message = {
                type: All_USERS,
                payload: total
            };
            dispatch(message);
        });
    }
}

export function Search(SearchKey, sortAscending) {
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
                payload: sortAscending ? total : total.reverse()
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
export function selectUser(user) {
    console.log(user['Scout-Full Name']);
    return {
        type: USER_SELECTED,
        payload: user
    };
}


export function selectUserSearch( user,sortAscending ) {
    let messagesRef = firebase.database().ref('history');
    return (dispatch) =>{
        let total = [];
        messagesRef.orderByChild("date").on('value', snap => {
            //messagesRef.off();
            snap.forEach( (data) => {
                const d = data.val();

                const x = d.name.trim().replace(/\s/g, "").toLowerCase();
                const y = user['Scout-Full Name'].trim().replace(/\s/g, "").toLowerCase();

                if( x.indexOf(y) >= 0){
                    total.push(d);
                }
            });
            const message = {
                type: SEARCH_HISTORY,
                payload: sortAscending ? total : total.reverse()
            };
            dispatch(message);
        });
    }
}
