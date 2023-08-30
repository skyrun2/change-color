import { useState } from 'react'

import './App.css'

  function App() {
    let simple = ['red', 'blue', 'chocolate', 'green', 'azure', 'black', 'beige','aqua', 'aliceblue','crimson','cornsilk','cyan','yellow','grey']
    const [rdmHex, setRdmHex] = useState('FFFFFF');
    const [s, setS] = useState('white');
    const [op, setOp] = useState({
      hex: false,
      simp: true
    })
    function hexCodes(r,g,b) {
    let rHex = r> 255 ? 'ff' : r < 1 ? '00' : r.toString(16)
    let gHex = g> 255 ? 'ff' : g < 1 ? '00' : g.toString(16)
    let bHex = b> 255 ? 'ff' :b < 1 ? '00' : b.toString(16)
    let hex = rHex.toUpperCase().padStart(2,'0') + gHex.toUpperCase().padStart(2,'0') + bHex.toUpperCase().padStart(2,'0')
    return hex
  }
    function style() {
      if(op.hex){
        return `#${rdmHex}`
      }
      if(op.simp){
        return s
      }

    }
    style();
    function cc(){
      if(op.hex){
        return setRdmHex((rdmHex) => hexCodes( Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)) )
      }
      if(op.simp){
        return setS((s) => simple[(Math.floor(Math.random()*(simple.length-1)))] )
      }
    }
    
  
  return (
    <>
      <header>
        <p> color Flipper</p>
        <div>
          <button href="./index.html" onClick={(e) =>{e.preventDefault
            setS((s) => 'white' )
            setOp((op) =>{
              return{...op, hex: false, simp: true}})}}
          >simple</button>
          <button href="./index.html" onClick={(e) => {
            e.preventDefault
            setRdmHex((rdmHex) => 'FFFFFF')
            setOp((op) =>{
              return{...op, simp: false, hex: true}})
          }} >Hex</button>
        </div>
      </header>
      <main style={{backgroundColor: `${style()}`}}>
        <p>background color: {style()}</p>
        <button  onClick={() => cc()}>Change color</button>
        
      </main>
    </>
  )
}

export default App
