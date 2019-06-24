import { CLICK_UPDATE_VALUE,CLICK_UPDATE_VALUE_2,LOAD_LIST_EMPLOYEES } from './actionTypes';
import {employeeService} from '../service';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});


export const clickButton2 = value => ({
  type: CLICK_UPDATE_VALUE_2,
  newValue: `click 2 ${value}`
});


export const loadListEmployess = (value) => ({
  type: LOAD_LIST_EMPLOYEES,
  listEmployees: value
});

