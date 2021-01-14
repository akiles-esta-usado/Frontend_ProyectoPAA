import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card, H2 } from 'native-base';
import axios from 'axios'
const Direcciones=({navigation,route})=>{
    const [comuna   ,setNombre]=     useState('')
    const [provincia,setProvincia]=  useState('')
    const [region   ,setRegion]=     useState('')
    const [calle    ,setCalle]=      useState('')
    const [numero   ,setNumero]=     useState('')
    const [detalles ,setDetalles]=   useState('')
    const postearDireccion=async ()=>{
        console.log("datos a postear",comuna,provincia,region,calle,numero,detalles,route.params.id);
        let form={
            comuna:comuna,
            provincia:provincia,
            region:region,
            calle:calle,
            numero:numero,
            detalles:detalles
        }
        //1ro: postear direccion
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/direcciones", form).then(
            async (res)=>{
                console.log("datos de direccion posteada",res.data.direccion,route.params.id);
                let form_direccion={
                    direcciones:[res.data.direccion]
                }
                axios.put("https://proyecto-app-web-2020-2.herokuapp.com/users/direccion/" + route.params.id, form_direccion).then(
                    (res)=>{
                        console.log("postactualizacion",res.data);
                        console.log("usuario creado correctamente");
                        console.log("Ahora será redirigido al login");
                        navigation.navigate("Login")
                    }
                )
            }
        )
        //2do: obtener direccion desde post y actualizar usuario con direcciones

        //get 
    }
    return(
        <Container className="mx-2">

            <Content>
                <H2>Direcciones</H2>
                <Text>Ingrese los datos para registrar su dirección</Text>
                <Form>
                    <Item>
                        <Input placeholder="Comuna" value={comuna} onChangeText={(comuna) => { setNombre(comuna) }} />
                    </Item>
                    <Item>
                        <Input placeholder="Provincia" value={provincia} onChangeText={(provincia) => { setProvincia(provincia) }} />
                    </Item>
                    <Item>
                        <Input placeholder="Región" value={region} onChangeText={(region) => { setRegion(region) }} />
                    </Item>
                    <Item last>
                        <Input placeholder="Calle" value={calle} onChangeText={(calle) => { setCalle(calle) }} />
                    </Item>
                    <Item>
                        <Input placeholder="Numero" value={numero} onChangeText={(numero) => { setNumero(numero) }} />
                    </Item>
                    <Item>
                        <Input placeholder="Detalles" value={detalles} onChangeText={(detalles) => { setDetalles(detalles) }} />
                    </Item>
                </Form>
                <Button block onPress={postearDireccion}><Text>Register</Text></Button>

            </Content>
        </Container>
    )
}
export default Direcciones