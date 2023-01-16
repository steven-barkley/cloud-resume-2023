import './App.css'
import React, {Fragment} from 'react'

export default function App() {
  return (
    <main>
      <Fragment>
        <h1>The is a single element</h1>
        <p style={{color:"cornflowerblue",fontFamily:"Arial" , fontSize:"25"}}>But the wrapper is a fragment not a div</p>
        <button>
          < Father Code="ACGGTACG" />
        </button>
      </Fragment>
    </main>
  )
}

function Father(props) {
  return (
    <h1>
      <h1>My child has half my genetic code <span style={{color:"red"}}>
        {props.Code.slice(3,-1)}
      </span>
      </h1>
    </h1>
  )
}