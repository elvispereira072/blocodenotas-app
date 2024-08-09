document.getElementById('save-note').addEventListener('click', function() {
    const noteContent = document.getElementById('note-content').value;
    if (noteContent.trim() !== "") {
        saveNoteToLocalStorage(noteContent);
        displayNotes();
        document.getElementById('note-content').value = "";
    }
});

function saveNoteToLocalStorage(content) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(content);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        let noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = note;
        notesList.appendChild(noteElement);
    });
}

document.addEventListener('DOMContentLoaded', displayNotes);
