import React, { useState } from 'react';
import { Paper, Button, TextField, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { signupRequest } from '../remote/auth.remote';

interface ISignupCompononentProps {
    setView: (view: 'LOGIN' | 'SIGNUP' | 'HOME' ) => void;
}


const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        signupForm: {
            maxWidth: 460,
            padding: 10,
            margin: 10
        },
        signupButton: {
            margin: 10
        }
    });
});


/*
    Shows a view featuring a form used to submit a signup request to the
    server.  Upon success signup, the user will be taken to the login view.
*/
export const SignupComponent: React.FC<ISignupCompononentProps> = (props) => {
    const classes = useStyles();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const signup = async () => {
        if (password !== verifyPassword) {
            return;
        }
        
        const credentials = {
            email, password
        }

        await signupRequest(credentials);
    }

    return (
        <Paper className={classes.signupForm} elevation={2}>
            <Typography>Signup</Typography>
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
                <TextField
                    type="password" id="verify-password" label="Verify Password" fullWidth
                    onChange={(e) => setVerifyPassword(e.target.value)}
                    value={verifyPassword}
                />
            </form>
            <Button 
                className={classes.signupButton} variant="contained" color="primary"
                onClick={() => signup()}    
            >Signup</Button>
        </Paper>

    )
}