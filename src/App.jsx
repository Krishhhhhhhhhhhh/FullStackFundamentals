import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div style={{display:"flex"}}>
     <Card>
      <h2>Hi from h2</h2>
     </Card>
    </div>
  )

}
function Card({children})
{
  return <div style={{border:"2px solid blue",padding:10,margin:10}}>
    {children}
  </div>
}

export default App
