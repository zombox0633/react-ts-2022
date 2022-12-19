import React from 'react'

type Props = {
    message?: string 
}

function Header({message}:Props) {
  return (
    <div><h1>{message}</h1></div>
  )
}

export default Header