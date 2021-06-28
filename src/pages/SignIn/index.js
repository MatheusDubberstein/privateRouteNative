import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({ navigation }) {
  async function login() {
    try {
      await AsyncStorage.setItem('@isSinged', 'true');
      navigation.navigate({ name: 'Home' });
    } catch (error) {
      console.log('Deu erro ao logar');
    }
  }

  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity style={classNames.button} onPress={login}>
        <Text style={classNames.buttonText}>Logar</Text>
      </TouchableOpacity>
    </View>
  );
}

const classNames = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    backgroundColor: '#E60000',
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
