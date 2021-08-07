import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <Text>
                The Game is Over!!
            </Text>
            <Text>
                Number of Rounds :{props.getrounds}
            </Text>
            <Text>
                Your Number:{props.getuserNumber}
            </Text>
            <Button title="New Game" onPress={props.onRestart} />

        </View>

    )
}
const styles=StyleSheet.create({
 screen:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
     
 }
})
export default GameOver
