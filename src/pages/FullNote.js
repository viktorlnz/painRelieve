import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function CreateNote({ props }) {

    return (

        <View style = {styles.component}>
            <Text style = {styles.date}>{props.note.date.day} de {props.note.date.month} de {props.note.date.year} - 
            {props.note.date.hour}:{props.note.date.minute}
            </Text>
            <View>
                <Text>{props.note.note}</Text>
            </View>
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