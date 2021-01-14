import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from "./profile"
import ServiceScreen from "./service"
import ServiceRegisterScreen from "./service_register"

const Drawer = createDrawerNavigator();

const BusinessScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Servicios">
                <Drawer.Screen
                    name="Perfil"
                    component={ProfileScreen}
                />
                <Drawer.Screen
                    name="Servicios"
                    component={ServiceScreen}
                />
                <Drawer.Screen
                    name="Registrar Servicios"
                    component={ServiceRegisterScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default BusinessScreen;