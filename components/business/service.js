import React from "react"

import { Container, Content, Text, Header, Left, Button, Icon, Body,Right,H3 } from "native-base"
import {useState,useEffect} from 'react'
import ServiceCard from "./service_card"
import axios from 'axios'
const ServiceScreen=({ navigation ,route})=> {
    const [profile, setProfile] = useState()
    const [loaded, setLoader] = useState(false)
    useEffect(() => {
        if (!loaded) {
            const fetch = async () => {
                const datos = await axios.get("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/" + route.params.id)
                if (datos.data) {
                    console.log(datos.data);
                    setProfile(datos.data)
                    setLoader(true)
                }
            }
            fetch()
        }
    })
    if (profile){
        return (
            <Container>
                <Header >
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
    
                    <Body>
                        <H3 style={{color:"white",fontSize:18}}>Lista de Servicios</H3>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => navigation.navigate("Registrar Servicios")}
                        >
                            <Icon name='add' />
                        </Button>
                    </Right>
    
                </Header>
    
                <Content padder>
                    {profile.servicios.map((element)=>
                        <ServiceCard nombre={element.nombre} descripcion={element.descripcion} precio={element.precio}/>
                    )}
    
                </Content>
            </Container>
        )
    }else{
        return(
            <Container>
                <Text>Loading</Text>
            </Container>

        )
    }
}
export default ServiceScreen