import React from "react"
import {useState} from "react"
import { Header, Left, Button, Icon, Body, Container, Content, Text, Form, Item, Input, Textarea } from "native-base"

export default function ServiceRegisterScreen({ navigation ,route}) {
    const [service,setService]=useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const onPress=()=>{
        console.log(service,descripcion,precio);

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
                    <Text>Registrar un Servicio</Text>
                </Body>

            </Header>

            <Content padder>
                <Form>
                    <Item>
                        <Input placeholder="Nombre del Servicio" value={service} onChangeText={(service) => { setService(service) }}/>
                    </Item>

                    <Item>
                        <Textarea rowSpan={5} placeholder="Descripción del Servicio" value={descripcion} onChangeText={(descripcion) => { setDescripcion(descripcion) }}/>
                    </Item>

                    <Item>
                        <Input placeholder="Precio" value={precio} onChangeText={(precio) => { setPrecio(precio) }}/>
                    </Item>

                </Form>
                <Button onPress={onPress} block class="mb-1"><Text>Log In</Text></Button>

            </Content>
        </Container>
    )
}