import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const pressHandler =()=>{
        navigation.goBack;
        // navigation.push('ReviewDetails');
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Details Screen</Text>
            <Button title='back to home screen' onPress={pressHandler} />
        </View>
    )
};