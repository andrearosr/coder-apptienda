import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import BreadNavigator from './BreadNavigator';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {userId
        ? <BreadNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;