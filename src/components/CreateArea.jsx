import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handelClick(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handelNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handelNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handelClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
