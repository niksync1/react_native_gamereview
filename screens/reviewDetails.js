import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    // const pressHandler =()=>{
    //     navigation.goBack();
    //     // navigation.push('ReviewDetails');
    // }
    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
};