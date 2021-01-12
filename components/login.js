import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input ,Button,Text,Card} from 'native-base';

const Login = ({navigation})=>{
    const [user,setUser] = useState("")
    const [passwd,setPasswd] = useState("")
    const [conditional, setcond] = useState(false)

    const onPress=()=>{
        navigation.navigate('Register', { name: 'Jane' })
    }
    return(
        <Container className="mx-2" >

            <Content>
                <Text>Inicia sesión con tu correso</Text>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button onPress={onPress} block disabled={conditional}><Text>Log In</Text></Button>
                <Text> No tienes una cuenta, <Text onPress={onPress}>REGISTRATE</Text></Text>
            </Content>
        </Container>
    )

}
export default Login