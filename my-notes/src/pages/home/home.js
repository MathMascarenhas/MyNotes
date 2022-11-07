import { Header } from "../../header/header";
import {NoteList} from '../../components/noteList/noteList'
import{ Note } from '../../components/note/note';
import uuid from 'react-uuid';
import Modal from "react-modal";
import { ActionMode } from "../../constants/index";
import "./home.css";
import { useState , useEffect} from "react";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none"
  },
};
Modal.setAppElement("#root");

export function Home() {
  const [noteList, setNoteList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [singleNote, setSingleNote] = useState({
    id: uuid(),
    text: 'teste',
  date: '11/05/2022'});
  const [currentMode, setCurrentMode] = useState(ActionMode.NORMAL);
  const [updateText, setUpdateText] = useState('');
  const characterLimit = 300


  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const handleActions = (action) => {
    const newAction = currentMode === action ? ActionMode.NORMAL : action;
    setCurrentMode(newAction);
  };

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >= 0){
        setUpdateText(event.target.value);
    }
}

  

  useEffect(() => {}, [noteList])

  const addNewNote = (text) => {
    const date = new Date();
		const newNote = {
			id: uuid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...noteList, newNote];
		setNoteList(newNotes); 
  }



  return (
    <>
    <div className="home">
      <Header setSearch={setSearchText} mode={currentMode} updateNote={() => handleActions(ActionMode.UPDATE)}
        deleteNote={() => handleActions(ActionMode.DELETE)}/>
      <div className="container">
      <NoteList notes={noteList.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)} addNote={addNewNote} setModal={handleModal} displayOneNote={handleModal} setOneNote={setSingleNote} mode={currentMode}
          previousValue={setUpdateText}/>
      </div>
    </div>
     <Modal
     isOpen={modalIsOpen}
     onRequestClose={handleModal}
     style={customStyles}
     contentLabel="Card information"
   > {currentMode === ActionMode.NORMAL ? <Note text={singleNote.text} date={singleNote.date}/> : (
    <div className="edit-note">
            <textarea className="edit-textarea" prows='8'
				cols='10'
				placeholder='Type your change' onChange={handleChange} defaultValue={updateText} value={updateText}></textarea>
            <div className="note-footer">
                <small>{characterLimit - updateText.length}/300 Characters</small>
                <button className='btn-edit' onClick={() => {}}>Update</button>
            </div>
    </div>
   )}
   </Modal>
   </>
  );
}
