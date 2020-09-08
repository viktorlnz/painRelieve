import AsyncStorage from '@react-native-community/async-storage';

const KEY = '@note_key';


async function createNote(note) {
    let success = true;
    try {
        const JSONnote = JSON.stringify(note);
        await AsyncStorage.setItem(KEY, JSONnote);
    }
    catch (e){
        console.log(e);

        success = false;
    }

    return success;
}

async function readNote(){
    
    try{
        const JSONnote = await AsyncStorage.getItem(KEY);

        return JSONnote != null ? JSON.parse(JSONnote) : null;
    }
    catch(e){
        console.log('log extra para reforçar erro.')
        console.log(e);

        return null;
    }
}

export {
    createNote,
    readNote
};