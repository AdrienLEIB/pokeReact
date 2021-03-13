import React, { useEffect, useState } from 'react';
import {Redirect, Route } from 'react-router-dom';

const privateRoute = ({component: Component, favorites, ...rest}) => {
    
    return (
        <Route
            {...rest}
            render={props =>{ 
                return favorites.length > 0  ? (
                    <Component {...props} />) : (
                    <Redirect to='/'></Redirect>)
                }
            }
        >
        </Route>
    );
};

export default privateRoute;