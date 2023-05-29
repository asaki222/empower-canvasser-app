const baseUrl = `http://localhost:3001/`

const deleteNote = (id: String)=>{
    `${baseUrl}${id}`
}

const viewAllNotes = `${baseUrl}/notes`


export{
    deleteNote,
    viewAllNotes
}