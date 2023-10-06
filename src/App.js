/*import { useState } from 'react'
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}
	return (
		<>
			<h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default App;
*/

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [form, setForm] = useState({});
  // const [users, setUsers] = useState([]);

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('https://dbtesting-002jenish.vercel.app',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
  //   const data = await response.json();
  //  console.log(data);
  }

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
        <input type="text" name="username" onChange={handleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
      {/* <div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username}</li>)}
        </ul>
      </div> */}
    </div>
  )
}

export default App;