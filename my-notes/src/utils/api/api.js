const defaultUrl = "https://my--note.herokuapp.com";

export const api = {
  createNote: async (note) => {
    const response = await fetch(defaultUrl + "/notes", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(note),
    });
    return response;
  },
  getAllNotes: async () => {
    const response = await fetch(defaultUrl + "/notes", { method: "GET" });
    const allNotes = await response.json();
    return allNotes;
  },
  updateNote: async (id, note) => {
    const response = await fetch(`${defaultUrl}/notes/${id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(note),
    });

    const noteUpdated = await response.json();
    return noteUpdated;
  },
  deleteNote: async (id) => {
    const response = await fetch(`${defaultUrl}/notes/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const deletedNote = response.json();

    return deletedNote;
  },
};
