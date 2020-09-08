import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//Imports of the main page
import { AntDesign } from '@expo/vector-icons';

//Importing the notes
import { readNote } from '../util/noteStorage';

const getNotes = async () => {
    const NOTES = await readNote();

    console.log("Analise");
    console.log(JSON.stringify(NOTES));

    return(
        NOTES ? 
            <Text>{JSON.stringify(NOTES)}</Text> :
            <Text>Comece criando uma nota</Text>
    );
}

export default function Main( {navigation} ) {
    
    

    return (
        <View style={styles.container}>
            <Text>Pain Relieve</Text>

            <Text>{getNotes()}</Text>
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