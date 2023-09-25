import axios from "axios";

function todoReducer(state,payload){
    switch (payload.action) {
        case 'GET_TODO':          
            return [...state,...payload.data.slice(0,10)];
    
        default:
            return state;
    }
}

export default todoReducer;