import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';


import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Title } from 'native-base'
import Login from './components/login'
let styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    login: {
        flex: 1,
        marginTop: 2
    }
})

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
                <Content>
                    <Login styles={styles}></Login>
                </Content>
            </Container>
        </NavigationContainer>
    )
}
export default App