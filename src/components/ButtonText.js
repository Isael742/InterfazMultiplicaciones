import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ButtonText({cWidth, cHeight, text}){
  return (
    <TouchableOpacity style={[styles.cardOpacity, {width: cWidth, height: cHeight}]} activeOpacity={0.55}>
        <View style={styles.card}>
            <Text style={styles.smallBoldText}>{text} </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardOpacity:{
        backgroundColor: 'white',
        marginVertical: 12,
        borderRadius: 24,
        elevation: 4,
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    card:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#4789E9',
    },
    smallBoldText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        color: 'black'
    }
})