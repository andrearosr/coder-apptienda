import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import BreadNavigator from './BreadNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const loggedIn = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      {loggedIn
        ? <BreadNavigator/> 
        : <AuthNavigator />
      }
    </NavigationContainer>
  )
}