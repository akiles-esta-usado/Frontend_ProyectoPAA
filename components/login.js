import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input ,Button,Text,Card} from 'native-base';

const Login = ({navigation})=>{
    const [user,setUser] = useState("")
    const [passwd,setPasswd] = useState("")
    const [conditional, setcond] = useState(false)
    let message=''
    const register=()=>{
        navigation.navigate('Register', { name: 'Jane' })
    }
    const onPress = () => {
        console.log(user,passwd);
        // Conexión a login 




        //navigation.navigate('Register', { name: 'Jane' })
    }
    return(
        <Container className="mx-2" >

            <Content>
                <Text>Inicia sesión con tu correso</Text>
                    <Form>
                        <Item >
                        <Input placeholder="Username" value={user} onChangeText={(user)=>{setUser(user)}}/>
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