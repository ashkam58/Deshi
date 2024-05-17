import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
    ]
};

const formats = [
        'header',
        'bold', 'italics', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
]
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');

    function createNewPost(ev){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', )
        ev.preventDefault();

        fetch('http://localhost:4000/post', 
        
        {
            method:'POST',
            // body: 
        }
        )
    }

  return (
    <form onSubmit={createNewPost} >
        <input type="tile" 
        placeholder={'Title'} 
        value={title} 
        onChange={ev => setTitle(ev.target.value)}/>
        <input type="summary" placeholder={'Summary'} 
        value={summary}
        onChange={ev => setSummary(ev.target.value)}/>
        <input type="file" />
        <ReactQuill value={content} 
        onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
        <button style={{marginTop:'5px'}}>Create Post</button>
    </form>
  )
}

export default CreatePost