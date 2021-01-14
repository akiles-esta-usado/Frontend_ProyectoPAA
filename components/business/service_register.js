import React from "react"

import { Header, Left, Button, Icon, Body, Container, Content, Text, Form, Item, Input, Textarea } from "native-base"

export default function ServiceRegisterScreen({ navigation }) {
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
                    <Text>Registrar un Servicio</Text>
                </Body>

            </Header>

            <Content padder>
                <Form>
                    <Item>
                        <Input placeholder="Nombre del Servicio" />
                    </Item>

                    <Item>
                        <Textarea rowSpan={5} placeholder="Descripción del Servicio" />
                    </Item>

                    <Item>
                        <Input placeholder="Precio" />
                    </Item>

                </Form>
            </Content>
        </Container>
    )
}