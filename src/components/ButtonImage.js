import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function ButtonImage({cWidth, cHeight, imageRoute}){
  return (
    <TouchableOpacity style={[styles.cardOpacity, {width: cWidth, height: cHeight}]} activeOpacity={0.55}>
        <View style={styles.card}>
            <Image style={{width: '100%', height: '100%'}} 
                source={imageRoute} resizeMode='contain'/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardOpacity:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        elevation: 4,
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    card:{
        width: '50%',
        height: '50%'
    }
})