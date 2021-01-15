import React from "react"
import {useState,useEffect} from 'react'
import { Container, Content, Text, Header, Left, Button, Icon, Body ,Spinner,Card} from "native-base"
import axios from 'axios'
import ServiceCard from "./service_card"

export default function ServiceClientScreen({ navigation,route }) {
    const [servicios,setServicios]=useState()
    const [loader,setLoader]=useState(false)
    useEffect(()=>{
        const getServicios=async()=>{
            if(!loader){
                const config = {
                    headers: { "access-token": route.params.jwt }
                };
                const allservicios = await axios.get("https://proyecto-app-web-2020-2.herokuapp.com/servicios",config)
                if(allservicios.data){
                    console.log(allservicios.data);
                    setServicios(allservicios.data)
                    setLoader(true)
                }
            }
        }
        getServicios()
    })
    if(servicios){
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
                        <Text>Lista de Servicios</Text>
                    </Body>
    
                </Header>
    
                <Content padder>
                    {servicios.map((element)=>
                            <ServiceCard key={element._id} nombre={element.nombre} precio={element.precio} descripcion={element.descripcion}/>
                    )}
                </Content>
            </Container>
        )
    }else{
        return(
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
                        <Text>Lista de Servicios</Text>
                    </Body>

                </Header>

                <Content padder>
                    <Spinner color="red"></Spinner>
                </Content>
            </Container>

        )
    }
}