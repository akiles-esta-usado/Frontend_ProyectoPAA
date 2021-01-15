import React from "react";
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from "./profile"
import ServiceScreen from "./service"
import ServiceRegisterScreen from "./service_register"

const Drawer = createDrawerNavigator();

const BusinessScreen = ({jwt,id}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Servicios" drawerContent={props => {
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