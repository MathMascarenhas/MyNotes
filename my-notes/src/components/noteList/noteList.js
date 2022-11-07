import { Note } from "../../components/note/note";
import {AddNote} from '../../components/addNote/addNote'
import { ActionMode } from "../../constants/index";
import './noteList.css'

export function NoteList ({ notes, addNote, displayOneNote, setOneNote, mode, previousValue}) {
    return (
    <div className="note-list" >
        {notes.map((item, index) => {
           return (
            <button className="btn-note" onClick={async () => {
                if (mode === ActionMode.DELETE){

                }else{
                setOneNote(item);
                previousValue(item.text)
                displayOneNote();
            }
            }}>
            <Note key={index} text={item.text} date={item.date}/>
            </button>
            
           )
        })}
        <button className="btn-add">
        <AddNote addNewNote={addNote}/>
        </button>
    </div>
    );
}