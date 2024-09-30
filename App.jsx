
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components'
import Login from './components'
import Register from './components'


const App = () => {

const [isAutenticated, setIsAutenticated] = useState(false);
const [isRegistering, setIsRegistering] = useState(false);
const [currentUser, setCurrentUser] = useState(false);

const[users, setUsers] = useState([]);
const[posts, setPosts] = useState([]);

useEffect(() => {
  const storedUsers = JSON.parse(localStorage.getItem
    ('users')) || [];
    const storedPosts = JSON.parse(localStorage.getItem
      ('posts')) || [];

      storedUsers(storedUsers);
      storedPosts(storedPosts);
})

const handleRegister = (name, email, password) => {
  const newUser = {
    id: users.length + 1, name,email, password 
  }

  const updatedUsers = [...users, newUser];

  setUsers(updatedUsers);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  setIsRegistering(false);

}

const handleLogin = (email, password) => {
  const user = users.find((user) => user.email === email && user .
password === password );
 
if(user){
  setIsAutenticated(true)
  setCurrentUser(user)
  return true;
    } else {
      return false
    }
 }

 const handleAddPost = (title, description) => {
  const newPost = {
    id: posts.length + 1, title, description, userId : currentUser.id
  };

  const updatedPosts = [...posts,newPost];
  setPosts(updatedPosts);

  localStorage.setItem('posts' , JSON.stringify(updatedPosts))
 }

 const handleLogout = () => {
  setIsAutenticated(false)
  setCurrentUser(null)

  const getAuthorName = (userId) => {
    const user = user.find((user) => user.id === userId)
    return user ? user.name : 'Desconhecido'
  }
 }

 return(
  <div>
    {
      isAutenticated ? (
        <Home
        posts = {posts}
        getAuthorName = {getAuthorName}
        onAddPost = {handleAddPost} 
        onLogout = {handleLogout}
        />
      ) : (
        isRegistering ? (
          < Register onRegister={handleRegister} />
        ) : (
          <Login 
          onLogin = {handleLogin}
          onRegister= {() => setIsRegistering(true)}
          />
        )
      )
    }
  </div>
 )

}

export default App;