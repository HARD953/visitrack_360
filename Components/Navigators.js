import { View, Text } from 'react-native';
import React, {useState,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './globalContext';
import Login from '../Pages/LoginPage';
import Splashscreen from '../Pages/Splashscreen';
import Navigue from '../Pages/Navigue';

const Stack=createStackNavigator();

const Navigators = () => {
  const { userInfo,splashLoading }=useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        {splashLoading ? (
          <Stack.Screen name='splash' component={Splashscreen} />
        ):(userInfo.access ? (
            <Stack.Screen name="Navigue" component={Navigue} options={{ headerShown:false }} />
          ):(
            <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
            </>
          ))}  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators;