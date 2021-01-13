import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base'

import Login from './components/login'
import Register from './components/register'
import Direcciones from './components/direcciones'


const Drawer = createDrawerNavigator();

const App = () => {

    const [isReady, setReady] = useState(false)


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

    return (

        <NavigationContainer>
            <Container>
                <Header >
                    <Left />
                    <Body>
                        <Title>ServiceNow</Title>
                    </Body>
                    <Right />
                </Header>
                <Drawer.Navigator>
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Register" component={Register} />
                    <Drawer.Screen name="Direcciones" component={Direcciones} />
                </Drawer.Navigator>
            </Container>
        </NavigationContainer>
    )
}
export default App