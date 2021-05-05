import React from "react"
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from "./images/memories.png"
import Posts from "./Components/Posts/Posts"
import Form from "./Components/Form/Form"
import useStyles from "./styles"

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="primary">
          <Typography variant="h2" align="left" className={classes.heading}>
            Memories
          </Typography>
          <img src={memories} className={classes.image} alt="memories" height="100" width="100" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={2}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
