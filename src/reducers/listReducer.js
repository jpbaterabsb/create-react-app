import { LOAD_LIST_EMPLOYEES_SUCCESS, LOAD_LIST_EMPLOYEES_STARTED, LOAD_LIST_EMPLOYEES_FAILURE } from "../actions/actionTypes";

const initialState =  {
    listEmployees: []
}


export const listReducer = (state = initialState, action) => {


    // console.log('action',action)
    // console.log('state',state)

    switch(action.type){
        
        case LOAD_LIST_EMPLOYEES_STARTED: 
        return {
            ...state,
        }

        case LOAD_LIST_EMPLOYEES_SUCCESS:
        return {
            ...state,
            listEmployees: action.payload
        } 
        case LOAD_LIST_EMPLOYEES_FAILURE:
        return {
            ...state,
            error: action.payload
        }     

        default : 
        return state;
    }
}