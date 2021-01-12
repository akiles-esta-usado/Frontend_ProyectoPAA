import {ListItem} from 'react-native-elements'
const Navigation = ()=>{
    const list=[
        {name:"Home",icon:'hola'},
        { name: "servicios", icon: 'hola' },
    ]

    return(
        <View>
            {
                list.map((l,i)=>{
                    <ListItem
                        key={i}
                        leftAvatar={{source:{uri:l.icon}}}
                        title={l.name}
                        bottomDivider>
                    </ListItem>
                })
            }
        </View>
    )
}
export default Navigation