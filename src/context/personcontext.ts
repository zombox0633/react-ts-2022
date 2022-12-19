import { createContext } from "react";

export type Person = {
    name:string
    age:number
}

export const initialPerson:Person = {
    name:'C',
    age:30
}

export const PersonContext = createContext<Person|undefined>(undefined)