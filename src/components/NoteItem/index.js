import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function NoteItem({item}){

    return(
        <TouchableOpacity style = {styles.component}>
            <Text style = {styles.date}>{item.date.day} de {item.date.month} de {item.date.year} - 
            {item.date.hour}:{item.date.minute}
            </Text>
            <View>
                <Text>{item.note}</Text>
            </View>
        </TouchableOpacity>
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