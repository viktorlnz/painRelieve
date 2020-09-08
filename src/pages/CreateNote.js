
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function CreateNote() {

    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [numOfChars, setNumOfChars] = React.useState(value.length);


    return (
        <View style={styles.container}>
            <Text>Criar nota para diário</Text>

            <TextInput
                style={{height:80, width:80, borderColor: 'gray', borderWidth: 1}}
                multiline = {true}
                onChangeText={text => {onChangeText(text); setNumOfChars(text.length)}}
                value={value}

            />
            <Text>{numOfChars} caracteres escritos</Text>
            <TouchableOpacity style = {styles.createNoteButton}
            onPress = {() => alert(value)}>
                <Text>Criar nota</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    createNoteButton: {
        padding: 10,
        backgroundColor: '#66f',
        borderRadius: 20
    }

});
