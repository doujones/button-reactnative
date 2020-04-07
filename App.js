import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button'

export default function App() {
  const [color, setColor] = useState('red')
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const orange = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${orange})`
  }
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={{color: 'blue'}}>Open up App.js to start working on your app!</Text>
      <Button text="Hello" textColor="black"
      onPress={() => setColor(randomRgb())
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
