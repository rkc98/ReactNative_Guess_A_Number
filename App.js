import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState()
  const [guessRounds, setguessRounds] = useState(0)
  const newGameHandler=()=>{
    setguessRounds(0)
    setuserNumber(null)
  }
  const startGameHandler=(selectedNumber)=>{
    setuserNumber(selectedNumber)
    

  }
  const gameOverHandler=(numOfRounds)=>{
    console.log(numOfRounds);
    setguessRounds(numOfRounds)

  }
  let content=<StartGameScreen onStartGame={startGameHandler} />
  if(userNumber && guessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if(guessRounds>0){
    content=<GameOver getrounds={guessRounds} getuserNumber={userNumber} onRestart={newGameHandler} />
  }
  const header="Guess A Number"
  return (
    <View style={styles.screen}>
      <Header title={header} />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
