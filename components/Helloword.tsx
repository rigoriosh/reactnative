import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Helloword = () => {
    return (
        <View>
            <Text>ssss</Text>
            <Image source={require('../assets/favicon.png')}></Image>
        </View>
    );
}

const { container, titulo } = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignSelf: 'center', backgroundColor: '#292929'},
    titulo: { fontSize: 30, color: 'white'}
});

export default Helloword;