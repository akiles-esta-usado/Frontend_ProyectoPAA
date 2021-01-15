import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from "./profile"
import BusinessScreen from "./business"
import ServiceScreen from "./service"

const Drawer = createDrawerNavigator();

export default function ClientScreen() {

    const [hasServices, setServices] = useState(false);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Negocios">
                <Drawer.Screen
                    name="Perfil"
                    component={ProfileScreen}
                />

                <Drawer.Screen
                    name="Negocios"
                    component={BusinessScreen}
                />

                <Drawer.Screen
                    name="Servicios de Empresa"
                    component={ServiceScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}