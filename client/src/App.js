import './App.css'
import { useState } from 'react'
import axios from 'axios'
import Home from './Home'
import Form from './Form'
import {useNavigate, BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChange1(value) {
    setName(value)
  }
  function handleChange2(value) {
    setEmail(value)
  }
  function handleChange3(value) {
    setPassword(value)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    let {data} = await axios.post('http://localhost:9000/signup',{ name, email, password, isAdmin: false })
    sessionStorage.setItem('token', data.token)
    /* send get req using token from session storage */
    setName('')
    setEmail('')
    setPassword('')
    navigate('/home')
  }

 

  return (
    <>
      <Routes>
        <Route path='/' element={<Form name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleChange1={handleChange1} handleChange2={handleChange2} handleChange3={handleChange3} handleSubmit={handleSubmit}  />}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
