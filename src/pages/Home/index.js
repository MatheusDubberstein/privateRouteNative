import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  async function logout() {
    try {
      await AsyncStorage.setItem('@isSinged', 'false');
      navigation.navigate({ name: 'SignIn' });
      console.log({ navigation });
    } catch (error) {
      console.log('Deu erro ao logar');
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity style={classNames.button} onPress={logout}>
        <Text style={classNames.buttonText}>Sair</Text>
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
