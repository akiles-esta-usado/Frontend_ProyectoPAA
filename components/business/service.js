import React from "react"

import { Container, Content, Text, Header, Left, Button, Icon, Body,Right,H3 } from "native-base"

import ServiceCard from "./service_card"

export default function ServiceScreen({ navigation }) {
    return (
        <Container>
            <Header >
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.openDrawer()}
                    >
                        <Icon name='menu' />
                    </Button>
                </Left>

                <Body>
                    <H3 style={{color:"white",fontSize:18}}>Lista de Servicios</H3>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => navigation.navigate("Registrar Servicios")}
                    >
                        <Icon name='add' />
                    </Button>
                </Right>

            </Header>

            <Content padder>

                <ServiceCard nombre={"hola"} descripcion={"buenardo"} precio={"15000"}/>

            </Content>
        </Container>
    )
}