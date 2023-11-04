import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

//Will be the pantry screen
//Empty right now

const SecondScreen = ({navigation}) => {
    return (
        <ImageBackground
        source={require('./Images/pantryimage.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            </View>
        </ImageBackground>        
    );
};

export default SecondScreen;