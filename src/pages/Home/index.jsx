import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={"/login"} >Vá para a tela de login</Link>
    </>
  )
}
