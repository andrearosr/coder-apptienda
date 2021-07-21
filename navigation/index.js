import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BreadNavigator from './BreadNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user
        ? <BreadNavigator/> 
        : <AuthNavigator />
      }
    </NavigationContainer>
  )
}