import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Cadastrar" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
