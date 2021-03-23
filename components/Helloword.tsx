import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from "expo-image-picker";
import * as ExpoSharing from "expo-sharing";

const Helloword = () => {
    const [myImg, setMyImg] = useState({uri:'http://picsum.photos/200/200'});
    const [funcionBtn, setFuncionBtn] = useState('Select photo');
    const click = ()=>{console.log('clickled'); Alert.alert(' Hello Thiago')}
    const openImagePicker = () => {
        if (funcionBtn === 'Share') {
            shareImg();
        } else {   
            loadImg();         
        }
    }
    const loadImg = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Permission to access camera is required');
            return
        }
        const miImage = await ImagePicker.launchImageLibraryAsync();
        console.log(miImage);
        if (!miImage.cancelled) {
            setMyImg({uri: miImage.uri});
            setFuncionBtn('Share');
        }
    }
    const shareImg = async() => {
        console.log('sharing');
        setFuncionBtn('Select photo');
        if (!(await ExpoSharing.isAvailableAsync())) {
            Alert.alert('Sharing is not avalible on your platform');
            return
        }
        const i = await ExpoSharing.shareAsync(myImg.uri);
        console.log({i});
        
    }
    //console.log({myImg});
    return (
        <View style={{alignItems: "center"}}>
            <StatusBar style="auto" />
            <Text style={titulo}>Rigo</Text>
            <Image source={require('../assets/favicon.png')} style={{marginBottom:30, resizeMode:"contain"}}></Image>
            <TouchableOpacity onPress={openImagePicker}>
                <Image source={{uri: myImg.uri }} style={imagen}></Image>            
            </TouchableOpacity>
            <Button title="press me" onPress={click} accessibilityLabel="Learn more about this "/>
            <TouchableOpacity onPress={openImagePicker} style={{backgroundColor: 'red', borderRadius:20, marginTop:10}}>
                <Text style={{fontSize:15, color: 'white', padding: 10}}>{funcionBtn}</Text>
            </TouchableOpacity>
        </View>
    );
}

const { container, titulo, imagen } = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white'},
    titulo: { fontSize: 20, color: 'white', marginBottom: 20},
    imagen: {width: 200, height:200, borderRadius: 100, resizeMode:"contain"}
});

export default Helloword;