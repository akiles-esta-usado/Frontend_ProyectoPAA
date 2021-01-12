import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input ,Button,Text,Card} from 'native-base';

const Login = (styles)=>{
    const [user,setUser] = useState("")
    const [passwd,setPasswd] = useState("")
    const [conditional, setcond] = useState(false)

    const onPress=()=>{
        if (conditional===true){
            setcond(false)
        }else{
            setcond(true)
        }
    }
    return(
        <Container className="mx-2" style={styles.login}>

            <Content>
                <Text>Inicia sesión con tu correo</Text>
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