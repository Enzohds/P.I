
import React, {useState} from "react";
import '../App.css';

function Home({posts,getAuthorName, onAddPost, onLogout}) {
const [ title, setTitle] =useState('');
const [description, setDescription] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(title, description)
    setTitle('');
    setDescription('');

}

    return(
        <div className="container">
            <h2>Home</h2>
            <button onClick={onLogout} 
            className="logout-button">Logout</button>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) =>
                    setTitle(e.target.value)} required/>
                </div>
                
                <div>
                <label> Description</label>
                <input type="text" value={title} onChange={(e) =>
                    setDescription(e.target.value)} required/>
                </div>

                    <button type="submit">Post</button>
            </form>

            <ul>
                {posts.map((posts) => (
                    <li key={posts.id}>
                        <h3>{posts.title}</h3>
                        <p>{posts.description}</p>
                        <span className="author">Postado por:
                        {getAuthorName(post.userId)}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;