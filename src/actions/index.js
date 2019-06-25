import { CLICK_UPDATE_VALUE,CLICK_UPDATE_VALUE_2,LOAD_LIST_EMPLOYEES_FAILURE,LOAD_LIST_EMPLOYEES_STARTED,LOAD_LIST_EMPLOYEES_SUCCESS } from './actionTypes';
import {employeeService} from '../service';


export const loadListEmployees = () => {
  
  return dispatch => {
    
    dispatch(loadListEmployeesStared())
    employeeService.getAll().then(
      employees => 
      dispatch(loadListEmployeesSuccess(employees)),
      error => 
      dispatch(loadListEmployeesFailure(error))
    );

  }
}


export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickButton2 = value => ({
  type: CLICK_UPDATE_VALUE_2,
  newValue: `click 2 ${value}`
});


export const loadListEmployeesStared = () => ({
  type: LOAD_LIST_EMPLOYEES_STARTED,
});


export const loadListEmployeesSuccess = (value) => ({
  type: LOAD_LIST_EMPLOYEES_SUCCESS,
  payload: value
});

export const loadListEmployeesFailure = (value) => ({
  type: LOAD_LIST_EMPLOYEES_FAILURE,
  payload: value
});

