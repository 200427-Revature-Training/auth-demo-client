import React, { useState } from 'react';
import { Paper, TextField, makeStyles, Theme, createStyles, Typography, Button } from '@material-ui/core';
import * as authRemote from '../remote/auth.remote';

interface ILoginCompononentProps {
    setView: (view: 'LOGIN' | 'SIGNUP' | 'HOME') => void;
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        loginForm: {
            maxWidth: 460,
            padding: 10,
            margin: 10
        },
        loginButton: {
            margin: 10
        }
    });
});

/*
    This component will show a view that allows the user to login.
    It will be responsible for collecting user information and submitting
    a login request to the server.  If the server responds with a successful
    login it should forward the user to the /home view.
*/
export const LoginComponent: React.FC<ILoginCompononentProps> = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const credentials = {email, password};
        await authRemote.loginRequest(credentials);
        // Handling response
    }

    return (<div>
        <Paper className={classes.loginForm} elevation={2}>
            <Typography>Login</Typography>
            <form>
                <TextField
                    id="email" label="E-mail Address" fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <TextField
                    type="password" id="password" label="Password" fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </form>
            <Button 
                className={classes.loginButton} variant="contained" color="primary"
                onClick={() => login()}    
            >Login</Button>
        </Paper>

    </div>)
}