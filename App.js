import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Title,Text } from 'native-base'

import Login from './components/login'
import Register from './components/register'
import Direcciones from './components/direcciones'
import LoginLayout from './contenedores/loginLayout'

const App = () => {

    const [isReady, setReady] = useState(false)
    const [jwt,setJWT]=useState('')

    async function loadFonts() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }


    if (!isReady) return (
        <AppLoading
            startAsync={loadFonts}
            onFinish={() => setReady(true)}
            onError={console.warn}
        />
    );
    if(jwt==''){
        return (
            <LoginLayout setJWT= {setJWT} jwt={jwt}></LoginLayout>
        )
    }else{
        return(
            <Text>{jwt}</Text>
        )
    }
}
export default App