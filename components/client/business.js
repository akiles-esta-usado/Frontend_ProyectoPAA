import React, { useState, useEffect } from "react"

import { Header, Button, Container, Text, Body, Left, Right, Icon, Content, Card, CardItem } from "native-base"

import { Alert } from "react-native"

import axios from 'axios'




export default function BusinessScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);

    const [facilitadores, setFacilitadores] = useState([])

    useEffect(() => {
        if (loaded) return;

        const fetchFacilitadores = async () => {
            const datos = await axios.get("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/")

            if (datos.data) {
                console.log(datos.data)
                setFacilitadores(datos.data)
                setLoaded(true)
            }
        }

        fetchFacilitadores()
    })

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
                    <Text>Lista de Facilitadores</Text>
                </Body>

                <Right>

                </Right>
            </Header>


            <Content padder>
                <BusinessCard data1 />
                <BusinessCard data2 />
                <BusinessCard data3 />
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
                        Nombre de Facilitador
                    </Text>
                </Left>

                <Right>
                    <Button rounded small onPress={showMore}>
                        <Text>Ver más</Text>
                    </Button>
                </Right>
            </CardItem>

        </Card>
    )
}