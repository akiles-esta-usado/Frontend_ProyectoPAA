import Login from '../components/login'
import React, { Component } from 'react';
import {useEffect} from 'react' 
import Register from '../components/register'
import Direcciones from '../components/direcciones'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
let loader=true
const LoginLayout = ({ setJWT, jwt, setSesion})=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} initialParams={{ setJWT: setJWT, setSesion: setSesion}}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Direcciones" component={Direcciones} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default LoginLayout