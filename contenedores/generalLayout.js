import React, { Component } from 'react';
import { useEffect ,useState} from 'react'
import LoginFacilitadorLayout from './loginFacilitadorLayout'
import LoginLayout from './loginLayout'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, Left, Body, Right, Title, Text,Button ,Content,Grid,Col,Row,H3} from 'native-base'
import { StyleSheet} from 'react-native'
const GeneralLayout = ({ jwt, setJWT, setSesion})=>{
    const [state,setState]=useState('')
    const setState1=()=>{
        console.log("setear estado a cliente");
        setState('cliente')
    }
    const setState2 = () => {
        console.log("setear estado a facilitador");
        setState('facilitador')
    }
    if(state==='cliente'){
        console.log("desde cliente",state);
        return(
            <LoginLayout setJWT={setJWT} jwt={jwt} setSesion={setSesion}></LoginLayout>
        )
    }else if(state==='facilitador'){
        console.log("desde facilitador",state);
        return(
            <LoginFacilitadorLayout setJWT={setJWT} jwt={jwt} setSesion={setSesion}></LoginFacilitadorLayout>
        )
    }
    else {
        return (
            <Container >
                <Header style={{ marginTop: 25 }}><Title>Bienvenido a ServiceNOW</Title></Header>
                <Content style={{ top: "30%" }}>
                    <Grid >
                        <Col style={{ alignItems: "center" }}>
                            <Row><H3>Ingreso</H3></Row>
                            <Row>
                                <Button block style={styles.contenido} onPress={setState1}><Text>Ingresar como Cliente</Text></Button>
                            </Row>
                            <Row>
                                <Button block style={styles.contenido} onPress={setState2}><Text>Ingresar como Facilitador</Text></Button>
                            </Row>
                        </Col>
                    </Grid>
                </Content>

            </Container>
        )
    }
}
const styles = StyleSheet.create({
    contenido:{
        marginTop:20,
        width:"90%"
    },
    center:{
        alignItems:"center",
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
export default GeneralLayout