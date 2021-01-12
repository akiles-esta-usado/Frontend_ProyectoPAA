import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Card } from 'native-base';

const Register=({navigation})=>{
    return(
        <Container className="mx-2">

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
                <Button  block ><Text>Log In</Text></Button>
                <Text> No tienes una cuenta, <Text >REGISTRATE</Text></Text>
            </Content>
        </Container>
    )
}
export default Register