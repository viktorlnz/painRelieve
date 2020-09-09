import AsyncStorage from '@react-native-community/async-storage';

const KEY = '@note_key';


async function createNote(value) {
    let success = true;

    let notes = [];

    readNote().then((getNotes) => {
        //console.log("Estudando o objeto:");
        //console.log(getNotes);

        if(getNotes != null){
            notes = getNotes;
        }

        const date = new Date();

        const note = {
            note: value,
            date: {
                'day': date.getDate(),
                'month': date.getMonth(),
                'year': date.getFullYear(),
                'hour': date.getHours(),
                'minute': date.getMinutes()
            },
            id: notes.length
        }

        notes.push(note);

        //console.log(notes);

        const JSONnote = JSON.stringify(notes);

        AsyncStorage.setItem(KEY, JSONnote).then(() => {console.log("Item criado!")})
        .catch( (e) => {
            console.log(e);
            success = false;
        });

    })
    .catch((e) => {console.log("Houve o seguinte erro: "+e); success = false;});

    return success;
}

async function readNote(){
    let returnedNote = null;

    try{
        const JSONnote = await AsyncStorage.getItem(KEY);

        //console.log("Debugando o objeto");
        //console.log(JSONnote);

        if (JSONnote != null){
            returnedNote = JSON.parse(JSONnote);
        }

    }
    catch(e){
        console.log('log extra para reforçar erro.')
        console.log(e);

    }

    return returnedNote;
}

export {
    createNote,
    readNote
};