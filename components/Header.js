import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>

    )
}
const styles=StyleSheet.create({
    header:{
        width:"100%",
        height:90,
        paddingTop:36,
        backgroundColor:"red",
        alignItems:'center',
    },
    headerTitle:{
        color:"white",
        fontSize:18,
        fontFamily:'open-sans-bold'
        
        

    }

})
export default Header
