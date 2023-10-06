/*
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [form, setForm] = useState({});
  // const [users, setUsers] = useState([]);

  // const handleForm = (e)=>{
  //   setForm({
  //     ...form,
  //     [e.target.name] : e.target.value
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = fetch('https://dbtesting-002jenish.vercel.app/demo', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        // Handle non-successful HTTP responses here
        console.error('Request failed with status:', response.status);
        return;
      }
      const data = response.json();
      // Handle the response data here (if needed)
      console.log('Response data:', data);
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error('Error occurred:', error);
    }
  }
  
  //   const data = await response.json();
  //  console.log(data);

  // const getUsers = async ()=>{
  //   const response = await fetch('http://localhost:8080/demo',{
  //     method:'GET',
  //   })
  //  const data = await response.json();
  //  setUsers(data);
  // }

  // useEffect(()=>{
  //   getUsers();
  // },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>username</span>
        <input type="text" name="username" ></input>
        <span>password</span>
        <input type="text" name="password"  ></input>
        <input type="submit"></input>
      </form>
      { <div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username}</li>)}
        </ul>
      </div> }
    </div>
  )
}

export default App;

*/

// pages/login.js
import { useState } from 'react';

export default function Login() {
  const [user, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your backend for authentication
    const response = await fetch('https://dbtesting-git-main-002jenish.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });

    if (response.ok) {
      // Handle successful login
      alert('Login successful');
    } else {
      // Handle login failure
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name = "username"
            value={user}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name = "password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
