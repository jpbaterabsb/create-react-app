import axios from  'axios';

const URL = 'http://localhost:4000';

const getAll = () => axios.get(`${URL}/employees`).then( employees => employees.data)


export const employeeService = {getAll};