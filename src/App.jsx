import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [title,setTitle]=useState("My name is ");

  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }
  return (
  <>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
    <Header title="head1"></Header>
    <Header title="head2"></Header>
  </>
  )
}

function Header({title})
{
  return <div>
    {title}
  </div>
}

export default App
