import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AuthScreenWrapper from '../../components/AuthScreenWrapper';

const LoginScreen = () => {
  return (
    <AuthScreenWrapper
      title="INGRESAR"
      message="¿Aún no tienes cuenta?"
      buttonText="Ir al registro"
      buttonPath="Register"
    >
      <Text>formulario</Text>
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;