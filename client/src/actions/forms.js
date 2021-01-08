import * as api from '../api/index.js';


export const getForms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchForms();
    // const { type } = 
    dispatch({ type: 'FETCH_ALL', payload: data });

  } catch (error) {
    console.log(error);
  }
};

// export const getFormsByName = (formname) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchFormsbyName(formname);

//     dispatch({ type: 'FETCH_ALL_NAME', payload: data });

//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getFormsByDOB = (formdob) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchFormsbyDOB(formdob);
//     // const { type } = 
//     dispatch({ type: 'FETCH_ALL_DOB', payload: data });

//   } catch (error) {
//     console.log(error);
//   }
// };


  export const createForm = (form) => async (dispatch) => {
    try {
      const { data } = await api.createForm(form);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
