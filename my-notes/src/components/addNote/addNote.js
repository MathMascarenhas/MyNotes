import { useState } from 'react'; 
import './addNote.css'

export function AddNote ({addNewNote}) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const handleSave = () => {
        if(noteText.trim().length > 0) {
            addNewNote(noteText);
            setNoteText('');
 
        }
    }


    return (
        <div className="newNote">
            <textarea prows='8'
				cols='10'
				placeholder='Type to add a note...' onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <span>{characterLimit - noteText.length}/300 Characters</span>
                <button className='btn-save' onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}