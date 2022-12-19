import React, { PropsWithChildren } from 'react'
import {initialPerson,PersonContext} from './personcontext'

// type Props = {
//     Children : React.ReactNode
//     title:string
// }

function PersonProvider({children}:PropsWithChildren<unknown>) {// หรือจะใช้ {Children,title}:Props
  return (
    <PersonContext.Provider value={initialPerson}>
        {children}
    </PersonContext.Provider>
  )
}

export default PersonProvider