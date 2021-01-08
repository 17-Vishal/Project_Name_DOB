import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Tables from './components/Tables/Tables';
import Form from './components/Form/Form';
import { getForms } from './actions/forms';
import useStyles from './styles';
// import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
 
  const classes = useStyles();
 
  useEffect(() => {
    dispatch(getForms());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Project Work</Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container alignItems="stretch" spacing={10}>
          <br></br>
            <Grid item xs={12} sm={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            {/* <br></br> */}
            <Grid item xs={12} sm={12}>
                
            <Typography className={classes.table_heading} variant="h4" align="center">Details in Table</Typography>
              <Tables setCurrentId={setCurrentId} />
            </Grid>
            
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
