import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HomeComponent } from './components/home.component';

import { AppBar, Toolbar, Typography, Button, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


function App() {
  const classes = useStyles();

  const [view, setView] = useState<'LOGIN' | 'SIGNUP' | 'HOME'>('LOGIN')

  const viewSwitch = () => {
    switch (view) {
      case 'LOGIN': return <LoginComponent setView={setView} />
      case 'SIGNUP': return <SignupComponent setView={setView} />
      case 'HOME': return <HomeComponent />
    }
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
    </Typography>
          <Button color="inherit" onClick={() => setView('LOGIN')}>Login</Button>
          <Button color="inherit" onClick={() => setView('SIGNUP')}>Signup</Button>
        </Toolbar>
      </AppBar>
      <main>
        {viewSwitch()}
      </main>
    </div>
  );
}

export default App;
