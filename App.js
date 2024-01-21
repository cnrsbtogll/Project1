import { Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from './src/screens/SignupScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

