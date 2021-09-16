import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';
import AuthNavigator from './user/AuthNavigator';

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;