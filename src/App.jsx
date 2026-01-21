import { useContext,useState } from "react";
import {CountContext} from "./context";
import {Navigate} from "react-router-dom";
import {useRecoilValue,RecoilRoot,useRecoilState} from "recoil"
import {countAtom} from "./store/atoms/count.jsx"

function App()
{
 
  return (
    <div>
      <RecoilRoot>

      <Count/>

      </RecoilRoot>
    </div>
  )
}
function Count()
{
  return <div>

    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer()
{
  const count=useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}
function Buttons(){
  const [count,setCount]=useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}