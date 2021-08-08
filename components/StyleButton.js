import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const StyleButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:"magenta",
        padding:10,
        borderRadius:25



    },
    buttonText:{
        color:"white",
        fontFamily:'open-sans',
        fontSize:16

    }
})
export default StyleButton
