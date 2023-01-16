import React from "react";
import './App.css';

function DadsDNA() {
  return (
      // React components can accept data passed to them called props.
      // Props are passed from the parent component to a child component.
      // Here we are passing a prop Code from DadsDNA to the SonsDNA component.
    < ChildsDNA Code="ACGGTACG" />
    )
}

export default function ChildsDNA(props) {
  return (
    <h1>My child has half my genetic code {props.Code.slice(4,7)}</h1>
  )
}

