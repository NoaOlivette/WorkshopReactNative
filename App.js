import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CustomButton from './customButton'

export default function App() {
  return (
    <View style={{}}>

      <View style={{ backgroundColor: "blue", justifyContent: 'center', alignItems: 'center', height: 200, width: 200}}>
        <Text style={{ alignContent: 'center' }}>Hello World!</Text>
      </View>

      
      <CustomButton
        text="lol"
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
