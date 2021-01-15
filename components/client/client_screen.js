import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from "./profile"
import BusinessScreen from "./business"
import ServiceScreen from "./service"

const Drawer = createDrawerNavigator();

export default function ClientScreen({ jwt, id }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Negocios">

                <Drawer.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />

                <Drawer.Screen
                    name="Negocios"
                    component={BusinessScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />

                <Drawer.Screen
                    name="Servicios de Empresa"
                    component={ServiceScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}