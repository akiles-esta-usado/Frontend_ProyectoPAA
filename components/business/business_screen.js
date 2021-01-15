import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from "./profile"
import ServiceScreen from "./service"
import ServiceRegisterScreen from "./service_register"

const Drawer = createDrawerNavigator();

const BusinessScreen = ({jwt,id}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Servicios">
                <Drawer.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    initialParams={{ jwt: jwt, id: id }}
                    
                />
                <Drawer.Screen
                    name="Servicios"
                    component={ServiceScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />
                <Drawer.Screen
                    name="Registrar Servicios"
                    component={ServiceRegisterScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default BusinessScreen;