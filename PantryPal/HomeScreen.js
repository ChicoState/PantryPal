import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title = "Go to Grocery List"
                onPress = {() => navigation.navigate('Grocery List')}
            />
            <Button
                title = "Go to Pantry"
                onPress = {() => navigation.navigate('Pantry')}
            />
        </View>
    );
};

export default HomeScreen;