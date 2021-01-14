import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input ,Button,Text,Card} from 'native-base';

const Login = ({navigation})=>{
    const [email,setEmail] = useState("")
    const [passwd,setPasswd] = useState("")
    const [verify,setVerify]= useState(false)
    const [conditional, setcond] = useState(false)
    let message=''
    const register=()=>{
        navigation.navigate('Register', { name: 'Jane' })
    }
    const onPress = () => {
        console.log(email,passwd);
        // Conexión a login 
        let form={
            email:email,
            contrasena:contrasena
        }
        axios.post("https://proyecto-app-web-2020-2.herokuapp.com/users/login", form).then(
            (res) => {
                console.log(res.data);
                if (res.data.permiso === "Aceptado"){
                    setVerify(true)
                    //redirigirlo al menu usuario
                }else{
                    
                }
            }
        )



        //navigation.navigate('Register', { name: 'Jane' })
    }
    return(
        <Container className="mx-2" >

            <Content>
                <Text>Inicia sesión con tu correso</Text>
                    <Form>
                        <Item >
                        <Input placeholder="Email" value={email} onChangeText={(email)=>{setEmail(email)}}/>
                        </Item>
                        <Item last >
                        <Input placeholder="Password" value={passwd} onChangeText={(user) => { setPasswd(user) }}/>
                        </Item>
                    </Form>
                    <Button onPress={onPress} block disabled={conditional} class="mb-1"><Text>Log In</Text></Button>
                <Text> No tienes una cuenta, <Text onPress={register}>REGISTRATE</Text></Text>
                <Text value={message}>{message}</Text>
            </Content>
        </Container>
    )

}
export default Login