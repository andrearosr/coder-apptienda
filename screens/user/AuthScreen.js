import React from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView } from 'react-native';
import Input from '../../components/Input';
import Colors from '../../constants/colors';

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>MI PAN: LOGIN</Text>
        <View>
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor ingrese un email válido"
            onInputChange={() => {}}
            initialValue=""
          />
          <Input
            id="password"
            label="Clave"
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Por favor ingrese una clave de al menos 6 caracteres"
            onInputChange={() => {}}
            initialValue=""
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button title="ACCEDER" color={Colors.primary} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="REGISTRARSE" color={Colors.accent} onPress={() => { }} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    marginBottom: 18,
  },
  container: {
    width: '80%',
    maxWidth: 400,
    height: '50%',
    maxHeight: 400,
    padding: 12,
  },
  footer: {
    marginTop: 24,
  },
  button: {
    marginBottom: 8,
  },
})

export default AuthScreen;