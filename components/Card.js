import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        
        shadowColor:'blue',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:6,
        elevation:8,
        shadowOpacity:0.3,
        backgroundColor:"white",
        padding:20,
        borderRadius:10


    },
    button:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        paddingHorizontal:15
        

    }
})
export default Card
