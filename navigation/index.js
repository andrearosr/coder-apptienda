import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';
import AuthNavigator from './user/AuthNavigator';
import { initAuthentication } from '../store/actions/auth.action';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    dispatch(initAuthentication());
  }, []);

  return (
    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;