import React from 'react'
import { PersonContext } from '../context/personcontext'
import { usePerson } from '../hook/uesPerson'

type Props = {
    message: string 
    message2?: string
}

function Header({message,message2}:Props) {
  const person = usePerson()
  return (
    <div>
      <h1>{message}</h1>
      {message2? <h2>{message2}</h2>:<h2>message2</h2>}
      {person.name}
    </div>
  )
}

export default Header