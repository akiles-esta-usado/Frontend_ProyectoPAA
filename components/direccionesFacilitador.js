import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card, H2 } from 'native-base';
import axios from 'axios'
const DireccionesFacilitador = ({ navigation, route }) => {
    const [comuna, setNombre] = useState('')
    const [provincia, setProvincia] = useState('')
    const [region, setRegion] = useState('')
    const [calle, setCalle] = useState('')
    const [numero, setNumero] = useState('')
    const [detalles, setDetalles] = useState('')
    const postearDireccion = async () => {
        console.log("datos a postear", comuna, provincia, region, calle, numero, detalles, route.params.id);
        let form = {
            comuna: comuna,
            provincia: provincia,
            region: region,
            calle: calle,
            numero: numero,
            detalles: detalles
        }
        //1ro: postear direccion
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/direcciones", form).then(
            async (res) => {
                console.log("datos de direccion posteada", res.data.direccion, route.params.id);
                let form_direccion = {
                    direcciones: [res.data.direccion]
                }
                axios.put("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/direccion/" + route.params.id, form_direccion).then(
                    (res) => {
                        console.log("postactualizacion", res.data);
                        console.log("usuario creado correctamente");
                        console.log("Ahora será redirigido al login");
                        navigation.navigate("LoginFacilitador")
                    }
                )
            }
        )
        //2do: obtener direccion desde post y actualizar usuario con direcciones

        //get 
    }
    return (
        <Container className="mx-2">

            <Content style={{ marginRight: 5, marginLeft: 5, marginTop: 10 }}>
                <H2>Direcciones</H2>
                <Text>Ingrese los datos para registrar su dirección</Text>
                <Form>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Comuna" value={comuna} onChangeText={(comuna) => { setNombre(comuna) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Provincia" value={provincia} onChangeText={(provincia) => { setProvincia(provincia) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Región" value={region} onChangeText={(region) => { setRegion(region) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Calle" value={calle} onChangeText={(calle) => { setCalle(calle) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Numero" value={numero} onChangeText={(numero) => { setNumero(numero) }} />
                    </Item>
                    <Item style={{ marginTop: 10 ,marginBottom:10}}>
                        <Input placeholder="Detalles" value={detalles} onChangeText={(detalles) => { setDetalles(detalles) }} />
                    </Item>
                </Form>
                <Button block onPress={postearDireccion}><Text>Ingresar Dirección </Text></Button>

            </Content>
        </Container>
    )
}
export default DireccionesFacilitador