import LoginFacilitador from '../components/loginFacilitador'
import React, { Component } from 'react';
import { useEffect } from 'react'
import RegisterFacilitador from '../components/registerFacilitador'
import DireccionesFacilitador from '../components/direccionesFacilitador'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Button,Icon} from 'native-base'
const Stack = createStackNavigator();
let loader = true
const LoginFacilitadorLayout = ({ setJWT, jwt, setSesion, setState }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginFacilitador" component={LoginFacilitador} initialParams={{ setJWT: setJWT, setSesion: setSesion, setState: setState}} 
                    options={{ headerLeft: () => (<Icon name='arrow-back-outline' onPress={() => setState('')} style={{marginLeft:10}} />)}}/>
                <Stack.Screen name="RegisterFacilitador" component={RegisterFacilitador} />
                <Stack.Screen name="DireccionesFacilitador" component={DireccionesFacilitador} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default LoginFacilitadorLayout