import React from "react"

import { Card, CardItem, Text, Body ,Button} from "native-base"

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
            <CardItem footer bordered>
                <Button block style={{width:"100%"}}><Text>Contratar este servicio</Text></Button>
            </CardItem>
        </Card>
    )
}