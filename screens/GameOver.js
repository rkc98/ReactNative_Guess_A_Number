import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!!
            </TitleText>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            <BodyText>
                Number of Rounds :{props.getrounds}
            </BodyText>
            <BodyText>
                Your Number:{props.getuserNumber}
            </BodyText>
            <Button title="New Game" onPress={props.onRestart} />

        </View>

    )
}
const styles=StyleSheet.create({
 screen:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
     
 },
 image:{
     width:"80%",
     height:"50%",
     borderRadius:150,
     marginVertical:10,
     borderWidth:3,
     borderColor:"black"
     

 }
})
export default GameOver
