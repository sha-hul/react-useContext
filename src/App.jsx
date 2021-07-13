import React, { createContext } from 'react'
import Comp1 from "./Comp1";
let Firstname=createContext();
let Lastname=createContext();
const App = () => {
    return (
       <>
       <Firstname.Provider value={"Shahul"}>
       <Lastname.Provider value={"Hameed"}>
       <Comp1/>
       </Lastname.Provider>
       </Firstname.Provider>
       </>
    )
}
export default App;
export {Firstname,Lastname};
