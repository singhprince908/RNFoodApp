import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash-screen/SplashScreen';
import LoginScreen from './src/screens/login-screen/loginScreen';
import CatalogueScreen from './src/screens/catalogue-screen/CatalogueScreen';
import Menu from './src/screens/menu/Menu.screen';
import OrderScreen from './src/screens/orders/Orders';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Catalogue" component={CatalogueScreen} />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{animation: 'slide_from_left'}}
          />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
