// import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (forms = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    // case 'FETCH_ALL_NAME':
    //     return action.payload;
    // case 'FETCH_ALL_DOB':
    //   return action.payload;
    case 'CREATE':
      return [...forms, action.payload];
   
    default:
      return forms;
  }
};
