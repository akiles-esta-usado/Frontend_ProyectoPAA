import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card ,H2} from 'native-base';
import axios from 'axios'
const Register=({navigation})=>{
    const [user,setUser]=useState(['hola','hola2'])
    const [loader,setLoader]=useState(false)
    const [state,setState]=useState('')
    //estados de registro
    const [nombre,setNombre]=useState('')
    const [email, setEmail] = useState('')
    const [fono, setFono] = useState('')
    const [passwd,setPasswd] = useState('')

    const postearRegistro = () => {
        console.log(nombre, email, fono, passwd);
        const form={
            nombre:nombre,
            email:email,
            telefono:fono,
            contrasena:passwd
        }
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/users",form).then(
            (res)=>{
                console.log(res.data);
                setState(res.data.message)
                navigation.navigate('Direcciones', { id: res.data.id })

            }
        )
        // Conexión a login 




        //navigation.navigate('Register', { name: 'Jane' })
    }
    
    useEffect(()=>{
        const funcion=async ()=>{
            const users = await axios.get('https://proyecto-app-web-2020-2.herokuapp.com/users')
            console.log('DATA POR LOG',users);
            setUser(users.data)
        }
        if(!loader){
            funcion()
            setLoader(true)
        }
    })
    return(
        <Container className="mx-2">

            <Content>
                <H2>Datos de usuario</H2>
                <Text>Rellene los siguientes datos</Text>
                <Form>
                    <Item>
                        <Input placeholder="Nombre" value={nombre} onChangeText={(user) => { setNombre(user) }}/>
                    </Item>
                    <Item>
                        <Input placeholder="Email" value={email} onChangeText={(user) => { setEmail(user) }}/>
                    </Item>
                    <Item>
                        <Input placeholder="Telefono" value={fono} onChangeText={(user) => { setFono(user) }}/>
                    </Item>
                    <Item last>
                        <Input placeholder="Contraseña" value={passwd} onChangeText={(user) => { setPasswd(user) }}/>
                    </Item>
                </Form>
                <Button block onPress={postearRegistro}><Text>Register</Text></Button>

            </Content>

        </Container>
    )
}
export default Register