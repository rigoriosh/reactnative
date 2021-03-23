import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Helloword from './components/Helloword'

export default function App() {
  return (
    <View style={container}>
      <Text style={titulo}>Selecciona una imagen!</Text>
      <Helloword/>
      {/* <StatusBar style="auto" />       */}
  </View>
  );
}


{/* <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!!!</Text>
      <StatusBar style="auto" />      
    </View> */}

const {container, titulo} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'white',
    fontSize: 30
  }
});
