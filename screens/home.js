import React from 'react';
import { useState } from 'react';
import {FlatList, TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating:5,body:'lorem ipsum', key: '1'},
        { title: 'Gotta catch them all ', rating:4,body:'lorem ipsum', key: '2'},
        { title: 'Not so "final" fantasy', rating:3,body:'lorem ipsum', key: '3'},        
    ]);
        // const pressHandler =()=>{
        // // navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    // }
    return (
        <View style={globalStyles.container}>
           <FlatList 
           data ={reviews}
           renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
           )}
           />
        </View>
    )
}