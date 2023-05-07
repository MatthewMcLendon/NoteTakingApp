import { getNotes } from "./notes/noteDataProvider.js";
import noteList from "./notes/noteList.js";
import NoteFormComponent from "./notes/noteForm.js";

getNotes().then(NoteFormComponent).then(noteList);
