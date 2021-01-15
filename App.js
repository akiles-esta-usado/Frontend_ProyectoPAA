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
import Business_Screen from './components/business/business_screen'
import GeneralLayout from './contenedores/generalLayout'
import ClientScreen from './components/client/client_screen';

const App = () => {

    const [isReady, setReady] = useState(false)
    const [jwt,setJWT]=useState('')
    const [sesion,setSesion]=useState({tipo:'',id:''})

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
            <GeneralLayout setJWT={setJWT} jwt={jwt} setSesion={setSesion}></GeneralLayout>
        )
    } else if (sesion.tipo=='facilitador'){
        return(
            <Business_Screen setJWT={setJWT}  jwt={jwt} id={sesion.id}/>
        )
    }else if(sesion.tipo=='cliente'){
        return(
            <ClientScreen setJWT={setJWT} jwt={jwt} ></ClientScreen>
        )
    }
}
export default App