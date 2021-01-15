import React, { useEffect, useState } from "react";

import {
    Header, Button, Container, Text, Body, Left,
    Right, Icon, Content, Card, CardItem, Spinner
} from "native-base"

import axios from 'axios'

const ProfileClientScreen = ({ navigation, route }) => {
    const [profile, setProfile] = useState()
    const [loaded, setLoader] = useState(false)

    useEffect(() => {
        if (loaded) return;

        const fetchClient = async () => {
            const config = {
                headers: { "access-token": route.params.jwt }
            };

            const res = await axios.get(
                "https://proyecto-app-web-2020-2.herokuapp.com/users/" + route.params.id,
                config)

            console.log("Ya, entonces tenemos los datitos")

            if (res.data.status == "OK") {
                console.log(datos.data)
                setProfile(res.data)
                setLoader(true)
            }

        }
        try {
            fetchClient()
        }
        catch (e) {
            console.log("Problema al cargar los datos del cliente: " + e)
        }
    })

    if (!profile) {
        return (
            <Container>
                <Header />
                <Content>
                    <Spinner color="blue" />
                </Content>
            </Container>
        )
    }

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
                    <Text>Perfil del Usuario</Text>
                </Body>

                <Right>

                </Right>
            </Header>

            <Content padder>
                <Card transparent>
                    <CardItem header bordered>
                        <Text>Nombre del Usuario</Text>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text>Teléfono</Text>

                            <Text>Email</Text>

                            <Text>Direcciones</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

export default ProfileClientScreen;