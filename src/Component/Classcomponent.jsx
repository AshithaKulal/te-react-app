import React from "react";


//class component

class Classcomponent extends React.Component{
    render(){
        return(
            <h3>Class Component <br></br><Classcomponent1></Classcomponent1></h3>
        )
    }
}

class Classcomponent1 extends React.Component{
    render(){
        return(
            <h6>When creating a React component, the component's name must start with an upper case letter.

            The component has to include the extends React.Component statement, this statement creates an inheritance to React.
            Component, and gives your component access to React. Component's functions.
            
            The component also requires a render method, this method returns HTML. </h6>
        )
    }
}



export default Classcomponent;