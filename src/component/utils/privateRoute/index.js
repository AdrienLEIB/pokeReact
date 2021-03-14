import React, { useEffect, useState } from 'react';
import {Redirect, Route } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const privateRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route
            {...rest}
            render={props =>{
                const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
                
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