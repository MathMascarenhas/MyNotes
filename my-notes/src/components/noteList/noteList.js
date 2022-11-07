import { Note } from "../../components/note/note";
import { AddNote } from "../../components/addNote/addNote";
import { ActionMode } from "../../constants/index";
import "./noteList.css";
import { api } from "../../utils/api/api";

export function NoteList({
  notes,
  addNote,
  displayOneNote,
  setOneNote,
  mode,
  previousValue,
  allNotes,
}) {
  return (
    <div className="note-list">
      {notes.map((item, index) => {
        return (
          <button
            key={index}
            className="btn-note"
            onClick={async () => {
              if (mode === ActionMode.DELETE) {
                await api.deleteNote(item.id);
                await allNotes();
              } else {
                await setOneNote(item);
                await previousValue(item.text);
                await displayOneNote();
              }
            }}
          >
            <Note text={item.text} date={item.date} />
          </button>
        );
      })}
      <button className="btn-add">
        <AddNote addNewNote={addNote} />
      </button>
    </div>
  );
}
