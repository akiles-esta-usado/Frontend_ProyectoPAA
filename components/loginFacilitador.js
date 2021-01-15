import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card } from 'native-base';
import axios from 'axios'
const LoginFacilitador = ({ navigation, route }) => {
    const [email, setEmail] = useState("")
    const [passwd, setPasswd] = useState("")
    const [conditional, setcond] = useState(false)
    let message = ''
    const register = () => {
        navigation.navigate('RegisterFacilitador')
    }
    const onPress = () => {
        console.log(email, passwd);
        console.log("ruta params", route);
        //route.params.setJWT("aqui estaria el jwt")
        // Conexión a login 
        let form = {
            email: email,
            contrasena: passwd
        }
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/login", form).then(
            (res) => {
                console.log(res.data);
                if (res.data.permiso === "Aceptado") {
                    console.log(res.data.permiso, "acepta3");
                    //redirigirlo al menu usuario
                    let getjwtform = {
                        k: "tel335_key",
                        s: "tel335_secret",
                    }
                    axios.post("https://proyecto-app-web-2020-2.herokuapp.com/auth", getjwtform).then(
                        (tok) => {
                            console.log("webtoken", tok.data.token);
                            route.params.setSesion({tipo:'facilitador',id:res.data.id})
                            route.params.setJWT(tok.data.token)
                            console.log("redirigiendo a main server");
                        }
                    )
                } else {
                    console.log("mal login, algo paso");
                }
            }
        )



        //navigation.navigate('Register', { name: 'Jane' })
    }
    return (
        <Container className="mx-2" >

            <Content style={{ marginRight: 5, marginLeft: 5, marginTop: 10 }}>
                <Text>Inicia sesión con tu correo</Text>
                <Form>
                    <Item >
                        <Input placeholder="Email" value={email} onChangeText={(email) => { setEmail(email) }} />
                    </Item>
                    <Item last >
                        <Input placeholder="Password" value={passwd} secureTextEntry={true} onChangeText={(user) => { setPasswd(user) }} />
                    </Item>
                </Form>
                <Button onPress={onPress} block disabled={conditional} class="mb-1"><Text>Log In</Text></Button>
                <Text style={{marginTop:10,textAlign:"center"}}> No tienes una cuenta, <Text onPress={register} style={{color:"blue"}}>REGISTRATE</Text></Text>
                <Text value={message}>{message}</Text>
            </Content>
        </Container>
    )

}
export default LoginFacilitador