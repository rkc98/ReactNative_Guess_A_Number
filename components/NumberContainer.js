import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
        <Text style={styles.number}>
            {props.children}

        </Text>
    </View>
    )
}
const styles=StyleSheet.create({
  container:{
      borderWidth:2,
      borderColor:"red",
      padding:10,
      borderRadius:10,
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center'
  },
  number:{
      color:"red",
      fontSize:22
      
  }
})
export default NumberContainer
