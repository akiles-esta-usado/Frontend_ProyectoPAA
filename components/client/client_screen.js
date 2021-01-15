import React, { useState } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileClientScreen from "./profile"
import BusinessClientScreen from "./business"
import ServiceClientScreen from "./service"

const Drawer = createDrawerNavigator();

export default function ClientScreen({ jwt, id ,setJWT}) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Negocios" drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label="Logout" onPress={() => {
                            setJWT('')
                        }} />
                    </DrawerContentScrollView>
                )
            }}>

                <Drawer.Screen
                    name="Perfil"
                    component={ProfileClientScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />

                <Drawer.Screen
                    name="Negocios"
                    component={BusinessClientScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />

                <Drawer.Screen
                    name="Servicios de Empresa"
                    component={ServiceClientScreen}
                    initialParams={{ jwt: jwt, id: id }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}