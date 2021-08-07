import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import BodyText from '../components/BodyText'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = (props) => {
    const [enteredvalue, setenteredvalue] = useState('')
    const [confirmed, setconfirmed] = useState(false)
    const [selectednumber, setselectednumber] = useState('')
    const numberInputHandler = inputText => {
        setenteredvalue(inputText.replace(/[^0-9]/g, ''))

    }
    const resetInputHandler = () => {
        setenteredvalue('')
        setconfirmed(false)
    }
    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredvalue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert("Invalid Number!", "Number has to betweem 1 and 99", [{
                text: 'Okay', style: 'destructive', onPress: resetInputHandler
            }])
            return
        }
        setconfirmed(true)
        setenteredvalue('')
        setselectednumber(choosenNumber)
    }
    let confirmedOutput
    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <BodyText>
                    You Selected
                </BodyText>
                <NumberContainer>
                    {selectednumber}
                </NumberContainer>
                <Button title="START GAME" color="red" onPress={()=>{
                    props.onStartGame(selectednumber)
                }} />


            </Card>


    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Start A New Game !!!
                </Text>
                <Card style={styles.inputContianer}>
                    <BodyText>
                        Select A Number

                    </BodyText>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredvalue} />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" color="red" onPress={resetInputHandler} /></View>
                        <View style={styles.button}><Button title="Confirm" color="darkblue" onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily:'open-sans-bold'

    },
    inputContianer: {
        width: "80%",
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: "45%"

    },
    input: {
        width: "20%",
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:'center'

    },
    text:{
        fontFamily:'open-sans-bold'
    }

})
export default StartGameScreen
