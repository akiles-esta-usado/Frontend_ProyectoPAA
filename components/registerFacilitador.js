import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card, H2 } from 'native-base';
import axios from 'axios'
const RegisterFacilitador = ({ navigation }) => {
    const [user, setUser] = useState(['hola', 'hola2'])
    const [loader, setLoader] = useState(false)
    const [state, setState] = useState('')
    //estados de registro
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [fono, setFono] = useState('')
    const [passwd, setPasswd] = useState('')
    const [rubro, setRubro] = useState('')


    const postearRegistro = () => {
        console.log(nombre, email, fono, passwd);
        const form = {
            name: nombre,
            email: email,
            contrasena: passwd,
            telefono: fono,
            rubro:rubro
        }
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/facilitador", form).then(
            (res) => {
                if(res.data.message=="Hubo un error creando un facilitador"){
                    console.log("no redirigir a ninguna parte, error al registrar usuario");
                }else{
                    console.log(res.data);
                    setState(res.data.message)
                    navigation.navigate('DireccionesFacilitador', { id: res.data.id })
                }

            }
        )
        // Conexión a login 
        //navigation.navigate('Register', { name: 'Jane' })
    }
    return (
        <Container className="mx-2">

            <Content style={{ marginRight: 5 ,marginLeft:5,marginTop:10}}>
                <H2>Datos de usuario</H2>
                <Text>Rellene los siguientes datos</Text>
                <Form>
                    <Item style={{marginTop:10}}>
                        <Input placeholder="Nombre" value={nombre} onChangeText={(user) => { setNombre(user) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Email" value={email} onChangeText={(user) => { setEmail(user) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Telefono" value={fono} onChangeText={(user) => { setFono(user) }} />
                    </Item>
                    <Item style={{ marginTop: 10 }}>
                        <Input placeholder="Rubro" value={rubro} onChangeText={(rubro) => { setRubro(rubro) }} />
                    </Item>
                    <Item last style={{ marginTop: 10 ,marginBottom:20}}>
                        <Input placeholder="Contraseña" value={passwd} onChangeText={(user) => { setPasswd(user) }} />
                    </Item>
                </Form>
                <Button block onPress={postearRegistro}><Text>Register</Text></Button>

            </Content>

        </Container>
    )
}
export default RegisterFacilitador