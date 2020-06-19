import React, { useState, useEffect } from 'react';
import * as authRemote from '../remote/auth.remote';

interface IHomeComponentState {
    email: string;
} 

/*
    The Home component is the landing page for a logged in user.  When
    a user logs in, they should be taken to this page.  We should show a
    message that includes some user details that we could only get if they
    are authenticated.
*/
export const HomeComponent: React.FC<IHomeComponentState> = (props) => {


    return (<div>Welcome {props.email}!</div>)
}