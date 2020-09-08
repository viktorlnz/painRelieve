
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function CreateNote() {

    const [value, onChangeText] = React.useState('Como está o seu dia? Precisa desabafar?');
    const [numOfChars, setNumOfChars] = React.useState(value.length);

    const makeNote = () => {
        const date = new Date();

        const note = {
            note: value,
            dateOfTheNote: {
                'day': date.getDate(),
                'month': date.getMonth(),
                'year': date.getFullYear(),
                'hour': date.getHours(),
                'minute': date.getMinutes()
            }
        }

        console.log(note.dateOfTheNote)

        return note;
    };

    return (

        <View style={styles.container}>
            <Text>Criar nota para diário</Text>

            <TextInput
                style={{ height: 80, width: 80, borderColor: 'gray', borderWidth: 1 }}
                multiline={true}
                onChangeText={text => { onChangeText(text); setNumOfChars(text.length) }}
                value={value}

            />
            <Text>{numOfChars} caracteres escritos</Text>
            <TouchableOpacity style={styles.createNoteButton}
                onPress={() => makeNote()}>
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
