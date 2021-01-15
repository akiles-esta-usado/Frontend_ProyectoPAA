import React from "react"

import { Card, CardItem, Text, Body } from "native-base"

export default function ServiceCard({nombre,descripcion,precio}) {
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
                        {descripcion}
                    </Text>
                </Body>
            </CardItem>

            <CardItem footer bordered>
                <Text>
                    {precio}
                </Text>
            </CardItem>
        </Card>
    )
}