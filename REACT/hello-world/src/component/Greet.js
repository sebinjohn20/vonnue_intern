import React from "react";

// Functional component
// function Greet() {
//   return <h1>Hello Sebin 👋</h1>;
// }


// const Greet = props => {
//     console.log(props)
//     return(<div>
//     <h1>Hello {props.name}👋 a.k.a  {props.heroName}</h1>
//     {props.children}
//     </div>
// )
// };


// ************* Destructuring props in the function parameter



// const Greet = ({ name, heroName, children }) => {
//     return (
//         <div>   
//             <h1>Hello {name}👋 a.k.a  {heroName}</h1>
//             {children}
//             </div>
//             )           
//             };



// ************* Destructuring props in the function body

const Greet = (props) => {
    const { name, heroName, children } = props
    return (                                        
        <div>
            <h1>Hello {name}👋 a.k.a  {heroName}</h1>
            {children}
        </div>
    )
}
                
                    
                        
                        

// Default export
export default Greet;





















