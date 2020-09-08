import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//Imports of the main page
import { AntDesign } from '@expo/vector-icons';

export default function Main( {navigation} ) {
    return (
        <View style={styles.container}>
            <Text>Pain Relieve</Text>

            <Text>Comece criando uma nota no seu diário</Text>
            <TouchableOpacity
                onPress = {() => navigation.navigate('CreateNote')}
                style={styles.addNoteButton}>
                <AntDesign name="plus" size={48} color="#FFF" />
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    addNoteButton: {
        height: 48,
        width: 48,
        backgroundColor: '#66f',
        borderRadius: 50
    }

});