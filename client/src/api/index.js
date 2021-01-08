import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchForms = () => axios.get(url);

// export const fetchFormsbyName = (formname) => axios.get(`${url}/name`, formname);
// export const fetchFormsbyDOB = (formdob) => axios.get(`${url}/dob`, formdob);
export const createForm = (newForm) => axios.post(url, newForm);

