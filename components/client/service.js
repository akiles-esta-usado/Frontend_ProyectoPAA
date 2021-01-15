import React from "react"

import { Container, Content, Text, Header, Left, Button, Icon, Body } from "native-base"

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
                    <Text>Lista de Servicios</Text>
                </Body>

            </Header>

            <Content padder>

                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />

            </Content>
        </Container>
    )
}