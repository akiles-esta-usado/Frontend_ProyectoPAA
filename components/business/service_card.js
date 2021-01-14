import React from "react"

import { Card, CardItem, Text, Body } from "native-base"

export default function ServiceCard() {
    return (
        <Card>
            <CardItem header bordered>
                <Text>
                    Nombre del Servicio
                </Text>
            </CardItem>

            <CardItem>
                <Body>
                    <Text>
                        Descripción del Servicio
                    </Text>
                </Body>
            </CardItem>

            <CardItem footer bordered>
                <Text>
                    Precio del Servicio
                </Text>
            </CardItem>
        </Card>
    )
}