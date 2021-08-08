import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import BodyText from '../components/BodyText'
import StyleButton from '../components/StyleButton'
import TitleText from '../components/TitleText'
const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!!
            </TitleText>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
            <View style={styles.resultText}>
            <BodyText style={{textAlign:'center',fontSize:20}}>
               Your phone needed
               <Text style={styles.highlight}> {props.getrounds} </Text>
                rounds to guess the number 
                <Text style={styles.highlight}> {props.getuserNumber}</Text>
            </BodyText>
            </View>
            <StyleButton onPress={props.onRestart}>
                New Game
            </StyleButton>

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
     

 },
 highlight:{
     color:"green",
     fontFamily:'open-sans-bold',
     
 },
 resultText:{
     marginHorizontal:30,
     marginVertical:15
 }

})
export default GameOver
