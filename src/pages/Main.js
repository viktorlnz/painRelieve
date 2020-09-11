import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

//Imports of the main page
import { AntDesign } from '@expo/vector-icons';

//Importing the notes
import { readNote } from '../util/noteStorage';

import NoteItem from '../components/NoteItem';

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

        notes.map((note) => {
            console.log(note.id);
        });

        let notesElement = <FlatList data = { notes } 
                                    renderItem = { NoteItem }
                                    keyExtractor = {item => item.id}
                                    />;

        /*notes.map( (noteItem) => {
            console.log("loge do item");
            console.log(noteItem.date);
            console.log("checagem FINAL");
            console.log(typeof noteItem.date.month);
            console.log(noteItem.date.month);

            const temp = 
            <NoteItem note = {noteItem} />

            notesElement.push(temp);
        }); */

        console.log(notesElement);

        return notesElement;
    }

    return (
        <View style={styles.container}>

            {notes ? makeNotesJsx():<Text>Comece criando uma nota</Text>}
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