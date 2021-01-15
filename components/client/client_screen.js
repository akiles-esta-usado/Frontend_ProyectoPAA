import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileClientScreen from "./profile"
import BusinessClientScreen from "./business"
import ServiceClientScreen from "./service"

const Drawer = createDrawerNavigator();

export default function ClientScreen() {

    const [hasServices, setServices] = useState(false);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Negocios">
                <Drawer.Screen
                    name="Perfil"
                    component={ProfileClientScreen}
                />

                <Drawer.Screen
                    name="Negocios"
                    component={BusinessClientScreen}
                />

                <Drawer.Screen
                    name="Servicios de Empresa"
                    component={ServiceClientScreen}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}