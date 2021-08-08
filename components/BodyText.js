import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const BodyText = (props) => {
    return (
        <Text style={{...styles.input,...props.style}}>
            {props.children}
        </Text>

    )
}
const styles=StyleSheet.create({
    body:{
        fontFamily:'open-sans'
    }
})

export default BodyText
