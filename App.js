import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Title } from 'native-base'
import Login from './components/login'
import Register from './components/register'

let styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
const Stack = createStackNavigator();

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
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}

                    />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            </Container>
        </NavigationContainer>
    )
}
export default App