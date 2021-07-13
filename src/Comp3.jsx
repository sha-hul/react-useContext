import React, { useContext } from 'react'
import { Firstname,Lastname } from './App';
const Comp3 = () => {
    // The Consumer implimentation
    // return (
    //     <>
    //         <Firstname.Consumer>
    //             {(fname)=>{
    //                 return(
    //                     <Lastname.Consumer>
    //                         {(lname)=>{
    //                             return(
    //                                     <h1>This is Context API Demo by {fname} {lname}</h1>
    //                             )
    //                         }}
    //                     </Lastname.Consumer>
    //                 )
    //             }}
    //         </Firstname.Consumer>
    //     </>
    // )

    // The use Contex implimentation define inside a functional component
    let fname = useContext(Firstname);
    let lname = useContext(Lastname);
    return(
        <>
        <h1>My name is {fname} {lname} </h1>
        <br/>
        <p>This is useContext,it makes things easier than the above Consumer State</p>
        </>
    )
}
export default Comp3

