import { useContext } from "react";
import { PersonContext } from "../context/personcontext";

export function usePerson(){
    const person = useContext(PersonContext)

    if(!person){
        throw new Error(
            "error"
        )
    }
    return person
}
