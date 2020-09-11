import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function NoteItem(props){
    const {note} = props;

    return(
        <View key = {note.id} style = {styles.component}>
            <Text style = {styles.date}>{note.date.day} de {note.date.month} de {note.date.year}. 
            {note.date.hour}:{note.date.minute}
            </Text>
            <View>
                <Text>{note.note}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#afc',
        backgroundColor: '#f1fff3',
        borderRadius: 10,
        padding:5,
        margin: 5
    },
    date: {
        textAlign: 'right',
        marginEnd: 2,
        marginBottom: 5

    }
});

export default NoteItem;