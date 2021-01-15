import React from "react"

import { Card, CardItem, Text, Body } from "native-base"

export default function ServiceCard({ nombre,precio,descripcion}) {
    return (
        <Card>
            <CardItem header bordered>
                <Text>
                    {nombre}
                </Text>
            </CardItem>

            <CardItem>
                <Body>
                    <Text>
                        {precio}
                    </Text>
                </Body>
            </CardItem>

            <CardItem footer bordered>
                <Text>
                    {descripcion}
                </Text>
            </CardItem>
        </Card>
    )
}