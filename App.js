import React from 'react';
import { Image, View, StyleSheet, Alert, TouchableOpacity, } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { Container, Header, Content, Text, Card, CardItem, Left, Body, Right,Title} from 'native-base'
import Login from './components/login'
let styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    login:{
        flex:1,
        marginTop:2
    }
})

const App =()=>{
    return(
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
    )
}
export default App