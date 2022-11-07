import { Search } from "../components/search/search";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ActionMode } from "../constants/index";
import "./header.css";

export function Header({ setSearch, mode, deleteNote, updateNote }) {
  return (
    <header>
      <h1>My Notes</h1>
      <Search handleSearch={setSearch} />
      <section className="buttons">
        <button
          className={`btn edit ${mode === ActionMode.UPDATE && "edit-active"}`}
          onClick={() => updateNote()}
        >
          <MdModeEdit className="icon edit" size="2em" />
        </button>
        <button
          className={`btn delete ${
            mode === ActionMode.DELETE && "delete-active"
          }`}
          onClick={() => deleteNote()}
        >
          <MdDelete className="icon delete" size="2em" />
        </button>
      </section>
    </header>
  );
}
