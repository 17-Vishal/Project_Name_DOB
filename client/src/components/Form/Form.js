import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createForm } from '../../actions/forms';

const Form = ({ currentId, setCurrentId }) => {
    const [formData, setFormData] = useState({ name: '', dob: ''});
    const form = useSelector((state) => (currentId ? state.forms.find((form) => form._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (form) setFormData(form);
      }, [form]);

    const clear = () => {
      setCurrentId(0);
      setFormData({ name: '', dob: '' });
    };

   const handleSubmit = async (e) => {
        e.preventDefault();
       
        // if (currentId === 0) {
            dispatch(createForm(formData));
            clear();
          // } else {
          //   dispatch(updateReview(currentId, reviewData));
            // clear();
          // }
  };

  
    return (
      
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>     
                <Typography variant="h4">Fill Your Details</Typography>
                
                {/* <TextField name="check" variant="outlined" label="check" fullWidth value={reviewData.check} onChange={(e) => setReviewData({ ...reviewData, check: e.target.value })} /> */}

                <TextField name="name" variant="outlined" label="Name" fullWidth value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <TextField name="dob" variant="outlined" label="DOB" fullWidth value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
               
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="#FFE4B5" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;