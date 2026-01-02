import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent/>}/>
    </div>
  )

}
function TextComponent() {
  return <h1>TextComponent</h1>
}
function CardWrapper({innerComponent}) {
  return<div style={{border:"2px solid black",padding:"10px",margin:"10px"}}>
    {innerComponent}
    </div>
}



export default App
