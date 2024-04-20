import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './src/screens/initial-screen/initialScreen';
import loginScreen from './src/screens/login-screen/loginScreen';
import LoginScreen from './src/screens/login-screen/loginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
