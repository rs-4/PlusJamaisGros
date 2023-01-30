import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from     '../stackscreens/forms/login/index';
import Register from  '../stackscreens/forms/register/index';
import Password from  '../stackscreens/forms/password/index'
import Homepage from  '../stackscreens/homepage/homepage'


const Stack = createNativeStackNavigator();


const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Homepage}
          options={{title: ' ',headerShown:false}}
          />
        
        <Stack.Screen
          name="register"
          component={Register}
          options={{title: ' ',headerShown:false}}
        />
         <Stack.Screen
          name="homepage"
          component={Homepage}
          options={{title: ' ',headerShown:false}}
        />
         <Stack.Screen
          name="password"
          component={Password}
          options={{title: ' ',headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
