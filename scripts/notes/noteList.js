import { useNote } from "./noteDataProvider.js";
import notesComponent from "./note.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notes-list-container");

const noteList = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "show-note") {
      const allNotes = useNote();
      render(allNotes);
    }
  });

  const render = (allNotes) => {
    contentElement.innerHTML = `${allNotes
      .map((notes) => {
        return notesComponent(notes);
      })
      .join("")}`;
  };
};

export default noteList;
