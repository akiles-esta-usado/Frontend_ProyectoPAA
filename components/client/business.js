import React from "react"

import { Header, Button, Container, Text, Body, Left, Right, Icon, Content, Card, CardItem } from "native-base"

import { Alert } from "react-native"




export default function BusinessClientScreen({ navigation }) {
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
                    <Text>Lista de Empresas</Text>
                </Body>

                <Right>

                </Right>
            </Header>


            <Content padder>
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </Content>
        </Container>
    )
}

function BusinessCard(props) {

    const goToServices = () => {
        console.log("Esto debería hacer la llamada de axios para obtener los servicios.")
    }

    const showMore = () => {
        Alert.alert(
            "Nombre de la empresa",
            "Descripción extensa de empresa",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Ok", onPress: goToServices }
            ],
            {
                cancelable: false
            })
    }

    return (
        <Card onPress>
            <CardItem header bordered>
                <Left>
                    <Text>
                        Nombre de Empresa
                    </Text>
                </Left>

                <Right>
                    <Button rounded small onPress={showMore}>
                        <Text>Ver más</Text>
                    </Button>
                </Right>
            </CardItem>

            <CardItem>

                <Body>
                    <Text>
                        Descripción breve de empresa
                    </Text>
                </Body>
            </CardItem>
        </Card>
    )
}