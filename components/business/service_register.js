import React from "react"
import {useState} from "react"
import { Header, Left, Button, Icon, Body, Container, Content, Text, Form, Item, Input, Textarea ,H3} from "native-base"
import axios from 'axios'
export default function ServiceRegisterScreen({ navigation ,route}) {
    const [service,setService]=useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const onPress=()=>{
        console.log(service,descripcion,precio,route.params.jwt,route.params.id);
        let form={
            name:service,
            descripcion:descripcion,
            precio:precio
        }
        const config = {
            headers: { "access-token": route.params.jwt }
        };
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/servicios",form,config).then(
            (res)=>{
                if(res.data.status=='OK'){
                    const servicios= {servicios:res.data.id}
                    axios.put("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/servicios/" + route.params.id, servicios, config)
                    .then((res)=>{
                        console.log(res.data);
                        if(res.data.status=="OK"){
                            console.log("usuario editado correctamente");
                            navigation.navigate("Perfil")
                        }else{
                            console.log("ocurrio un problema al registrar el servicio al usuario");
                        }
                    })
                    //axios put a facilitador para agregar servicio
                }else{
                    console.log("hubo un problema al crear el servicio, salu2");
                }
            }
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
                    <H3 style={{ color: "white", fontSize: 18 }}>Crear un servicio</H3>
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
                <Button onPress={onPress} block class="mb-1"><Text>Crear servicio</Text></Button>

            </Content>
        </Container>
    )
}