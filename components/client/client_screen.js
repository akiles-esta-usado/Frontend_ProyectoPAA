import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import ProfileUserScreen from './profileUserScreen'

const Drawer = createDrawerNavigator();

const ClientScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Servicios">
                <Drawer.Screen
                    name="PerfilUsuario"
                    component={ProfileUserScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default ClientScreen;