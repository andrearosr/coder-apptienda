import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import AuthScreenWrapper from '../../components/AuthScreenWrapper';
import { COLORS } from '../../constants/colors';
import { signup } from '../../store/actions/auth.action';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    dispatch(signup(email, password));
  }

  return (
    <AuthScreenWrapper
      title="REGISTRO"
      message="¿Ya tienes cuenta?"
      buttonText="Ingresar"
      buttonPath="Login"
    >
      <Text>Email</Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="REGISTRARME"
        onPress={handleSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
  },
});

export default RegisterScreen;