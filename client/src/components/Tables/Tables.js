
import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



import { getFormsByName, getFormsByDOB } from '../../actions/forms';

import useStyles from './styles';
import axios from 'axios';
const url = 'http://localhost:5000';
const Tables = ({ setCurrentId }) => {
  const [formDataName, setFormDataName] = useState({ name: ''});
  const [formDataDOB, setFormDataDOB] = useState({ dob: ''});
  const forms = useSelector((state) => state.forms);
  const classes = useStyles();
  const dispatch = useDispatch();
  // var i=0;
  // cons arr = useState([]);
  const [arr, setArray] = useState([]);
  const handleSubmitName = async (e) => {
    e.preventDefault();
    const arr1=await axios.get('/name/'+formDataName.name);
    setArray(arr1.data);
    // console.log(arr.data[0].name);
    
//  dispatch(getFormsByName(formDataName));

};
const handleSubmitDOB = async (e) => {
  e.preventDefault();
  const array=await axios.get('/dob/'+formDataDOB.dob);
  setArray(array.data);
  // console.log(arr.data[0].dob);
      // dispatch(getFormsByDOB(formDataDOB));

};

const submitformname = (e) => {
  // console.log(e.target.value);
 setFormDataName(
   { ...formDataName, name: e.target.value }
   )
}

const submitformdob = (e) => {
  // console.log(e.target.value);
 setFormDataDOB(
   { ...formDataDOB, dob: e.target.value }
   )
}


    console.log(forms);
    return (
      <Container>
         { !forms.length ? null : (
         
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b><p style={{color:'#6A5ACD', fontSize:'30px'}}>Name</p></b></TableCell>
                  <TableCell align="center"><b><p style={{color:'#6A5ACD', fontSize:'30px'}}>Date of Birth</p></b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                {forms.map((form) => (
                  <TableRow key={form._id}>
                    <TableCell align="center"><b><p style={{fontSize:'15px'}}> {form.name} </p></b></TableCell>
                    <TableCell align="center"><b><p style={{fontSize:'15px'}}> {form.dob} </p></b></TableCell>
              
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    </TableContainer>
)}
    <br></br>
    <form autoComplete="off" noValidate onSubmit={handleSubmitName}>     
            <Typography variant="h6">Search By:     &nbsp;
            <TextField display="inline" name="name" variant="outlined" label="Name"  value={formDataName.name} onChange={submitformname} />
            <Button variant="contained" size="large" type="submit" >Submit</Button>
            </Typography>
          </form>
          <form autoComplete="off" noValidate onSubmit={handleSubmitDOB}> 
              <Typography variant="h6">Search By:     &nbsp;
              <TextField display="inline" name="dob" variant="outlined" label="DOB"  value={formDataDOB.dob} onChange={submitformdob} />
              {/* <TextField display="inline" variant="outlined" label="DOB"  />&nbsp;&nbsp; */}
              <Button variant="contained" size="large" type="submit" >Submit</Button>
              </Typography>
            </form>

            { !arr.length ? null : (
         
         <TableContainer component={Paper}>
           <Table className={classes.table} aria-label="simple table">
             <TableHead>
               <TableRow>
                 <TableCell align="center"><b><p style={{color:'#6A5ACD', fontSize:'30px'}}>Name</p></b></TableCell>
                 <TableCell align="center"><b><p style={{color:'#6A5ACD', fontSize:'30px'}}>Date of Birth</p></b></TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               
               {arr.map((arr) => (
                 <TableRow key={arr._id}>
                   <TableCell align="center"><b><p style={{fontSize:'15px'}}> {arr.name} </p></b></TableCell>
                   <TableCell align="center"><b><p style={{fontSize:'15px'}}> {arr.dob} </p></b></TableCell>
             
                 </TableRow>
               ))}
             </TableBody>
           </Table>
   </TableContainer>
)}


</Container>
    
    )      
}

export default Tables;