const notesComponent = (notes) => {
  return `
        <div>
            <div>${notes.title}</div>
            <div>${notes.text}</div>
            <div>${
              new Date(notes.date).toLocaleDateString("en-US") +
              " " +
              new Date(notes.date).toTimeString().split("GMT")[0]
            }</div>
        </div>
    `;
};

export default notesComponent;
