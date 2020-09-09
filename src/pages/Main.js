import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//Imports of the main page
import { AntDesign } from '@expo/vector-icons';

//Importing the notes
import { readNote } from '../util/noteStorage';

export default function Main( {navigation} ) {
    const [notes, setNotes] = React.useState(null);
    
    React.useEffect(() => { 
    
        getNotes = () => {
        
            readNote().then( (note) => {
                //console.log("Analise");
                //console.log(note);

                setNotes(note.reverse());
            });

        }
    
        getNotes();
    }, []);
    
    const makeNotesJsx = () => {
        console.log("Function to make the notes in JSX");
        console.log(notes);

        let notesElement = '';

        notes.map( (noteItem) => {
            console.log("loge do item");
            console.log(noteItem.date);
            console.log("checagem FINAL");
            console.log(typeof noteItem.date.month);
            console.log(noteItem.date.month);

            notesElement += 
            ("<View>"
                +"<Text>"+noteItem.date.day+" de " 
                +noteItem.date.month+" de " 
                +noteItem.date.year+"." 
                +noteItem.date.hour+":"+noteItem.date.minute
                +"</Text>"
                +"<View>"
                +"    <Text>"+noteItem.note+"</Text>"
                +"</View>"
            +"</View>")
        });

        /*const notesElement = notes.reduce((noteItem, notesJsx) => {
            
            
            return (notesJsx +
            <View>
                <Text>{noteItem.date.day} de 
                {noteItem.date.month} de 
                {noteItem.date.year}. 
                {noteItem.date.hour}:{noteItem.date.minute}
                </Text>

                <View>
                    <Text>{noteItem.note}</Text>
                </View>
            </View>);
        });*/

        console.log(notesElement);

        return notesElement;
    }

    return (
        <View style={styles.container}>
            <Text>Pain Relieve</Text>

            <Text>{notes ? makeNotesJsx():"Comece criando uma nota"}</Text>
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