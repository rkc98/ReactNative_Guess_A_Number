import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

const generateRandom=(min,max,exclude)=>{
    min=Math.ceil(min)
    max=Math.floor(max)
    const randomNumber=Math.floor(Math.random()*(max-min))+min
    if (randomNumber===exclude){
        return generateRandom(min,max,exclude)
    }
    else{
        return randomNumber
    }
}


const GameScreen = (props) => {
    const [currentguess, setCurrentguess] = useState(generateRandom(1,100,props.userChoice))
    const [rounds, setrounds] = useState(0)
    const currentlow = useRef(1)
    const currenthigh = useRef(100)
    const{userChoice,onGameOver}=props
    useEffect(() => {
        if(currentguess===userChoice){
            console.log(rounds);
            onGameOver(rounds)
        }
        // return () => {
        //     cleanup
        // }
    }, [currentguess,userChoice,onGameOver])
    const nextGuessHandler=(direction)=>{
        if((direction==='lower' && currentguess<props.userChoice)
        ||(direction==='greater' && currentguess>props.userChoice)){
            Alert.alert("Don't lie","You Know that is wrong..",[{
                text:"sorry",
                style:"cancel"
            }])
            return

        }
        if(direction==="lower"){
            currenthigh.current=currentguess

        }
        else{
            currentlow.current=currentguess

        }
        // console.log(currentlow,currenthigh,currentguess);
       const nextNumber= generateRandom(currentlow.current,currenthigh.current,currentguess)
    //    console.log(nextNumber);
       setCurrentguess(nextNumber)
       setrounds(currentrounds=>
           currentrounds+1
       )
    }

    return (
        <View style={styles.screen}>
            <Text>
                Computer's Guess 
            </Text>
            <NumberContainer>
                {currentguess}
            </NumberContainer>

            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}  />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}  />
            </Card>

        </View>


    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:"80%"
    }

})
export default GameScreen
