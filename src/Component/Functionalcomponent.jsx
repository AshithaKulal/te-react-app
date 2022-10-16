import React from "react";
import '../Styles/Functional.css';

function FunctionalComponent()
{
 return(
    <h4>FUNCTIONAL COMPONENT  <FunctionalComponent1></FunctionalComponent1></h4>
 )
}
function FunctionalComponent1()
{
 return(
    <h6>A React functional component is a simple JavaScript function that accepts props and returns 
        a React element. After the introduction of React Hooks, writing functional components has become
         the standard way of writing React components in modern applications.<br></br>
         <FunctionalComponent2></FunctionalComponent2></h6>
 )
}



//React Fragments
const FunctionalComponent2=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent3></FunctionalComponent3>
                </tr>
            </thead>
            <tbody>
                <tr>
                <FunctionalComponent4></FunctionalComponent4>
                </tr>
            </tbody>
        </table>
    )
}

const FunctionalComponent3=()=>{
    return(
        <React.Fragment>
        <td>SNO</td>&nbsp;&nbsp;
        <td>NAME</td>&nbsp;&nbsp;
        <td>AGE</td>&nbsp;
        </React.Fragment>
    )
}

const FunctionalComponent4=()=>{
    return(
        <React.Fragment>
        <td>001</td>&nbsp;&nbsp;
        <td>John</td>&nbsp;&nbsp;
        <td>20</td>&nbsp;
        </React.Fragment>
    )
}


//only one export
export default FunctionalComponent;