import React from "react";
import {useEffect,useState} from 'react';
import { Header, Button, Container, Text, Body, Left, Right, Icon, Content, Card, CardItem ,H3} from "native-base"
import axios from 'axios'
const ProfileScreen = ({ navigation ,route}) => {
    const [profile,setProfile]=useState()
    const [loaded, setLoader] = useState(false)
    useEffect( ()=>{
        if(!loaded){
            const fetch=async()=>{
                const datos=await axios.get("https://proyecto-app-web-2020-2.herokuapp.com/facilitador/"+route.params.id)
                if (datos.data){
                    console.log(datos.data);
                    setProfile(datos.data)
                    setLoader(true)
                }
            }
            fetch()
        }
    })
    if(profile){
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
                        <Text>Datos de perfil</Text>
                    </Body>
    
                    <Right>
    
                    </Right>
                </Header>
    
                <Content padder>
                    <Card transparent>
                        <CardItem header bordered>
                            <Text>
                                {profile.nombre}
                            </Text>
                        </CardItem>
    
                        <CardItem>
                            <Body>
                                <Text>
                                    {profile.telefono}
                                </Text>
    
                                <Text>
                                    {profile.email}
                                </Text>
                                <Text>
                                    {profile.rubro}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <H3>Direcciones</H3>
                                {
                                    profile.direcciones.map((element)=>
                                        <Card key={element}>
                                            <CardItem>
                                                <Text>Calle:{element.calle}</Text>
                                            </CardItem>
                                            <CardItem style={{marginTop:-10}}>
                                                <Text>Comuna:{element.comuna}</Text>
                                            </CardItem>
                                            <CardItem style={{ marginTop: -10 }}>
                                                <Text>Numero:{element.numero}</Text>
                                            </CardItem>
                                            <CardItem style={{ marginTop: -10 }}>
                                                <Text>Provincia:{element.provincia}</Text>
                                            </CardItem>
                                            <CardItem style={{ marginTop: -10 }}>
                                                <Text>Región:{element.region}</Text>
                                            </CardItem>
                                            <CardItem style={{ marginTop: -10 }}>
                                                <Text>Detalles:{element.detalles}</Text>
                                            </CardItem>
                                        </Card>
                                    )
                                }
                            </Body>
                        </CardItem>
                        
    
                    </Card>
                </Content>
    
            </Container>
        );
    }else{
        return(<Container><Text>hola</Text></Container>)
    }
}

export default ProfileScreen;