import { LOAD_LIST_EMPLOYEES } from "../actions/actionTypes";

const initialState = () => {
    listEmployees: []
}


export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_LIST_EMPLOYEES: 
        return {
            ...state,
            listEmployees: action.listEmployees
        }
        default : 
        return{
            ...state
        };
    }
}