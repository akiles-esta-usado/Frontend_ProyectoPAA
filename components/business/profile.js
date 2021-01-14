import React from "react";

import { Header, Button, Container, Text, Body, Left, Right, Icon, Content, Card, CardItem } from "native-base"

const ProfileScreen = ({ navigation }) => {
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
                    <Text>Perfil de Empresa</Text>
                </Body>

                <Right>

                </Right>
            </Header>

            <Content padder>
                <Card transparent>
                    <CardItem header bordered>
                        <Text>
                            Nombre de Empresa
                        </Text>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text>
                                Teléfono
                            </Text>

                            <Text>
                                Email
                            </Text>
                        </Body>
                    </CardItem>

                </Card>
            </Content>

        </Container>
    );
}

export default ProfileScreen;