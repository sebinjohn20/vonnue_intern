
// **************REACT*********

import { StatementSync } from "node:sqlite"


// Prerequisistes


//  1 HTML ,Css and javascript fundamentals



//  Es6


//  javascript====>this keyborad ,filtermmap and reduce


//  ES6- let & const ,arrow functions,template literals ,default parameters,object literals , rest and spread operators and destructuring assignment\



    //  ************** Create React App************


// 1 npx create-react-app <project-name>
// 2 cd <project-name>
// 3 npm start
 






//*************** */ Components**********

// components are reusable


// In React, a component is a reusable,
 
// independent piece of UI.
 
//  Components make it easy to break down a large application into smaller,
   
//   manageable parts.





// **********Components types*********

// 1. Functional components



    // *  The simplest type of component.

    // *  Just a JavaScript function that returns JSX.

    // *  Can use Hooks (useState, useEffect, etc.) for state and lifecycle.

// 2. Class components



    // *  More complex, using ES6 classes.

    // *  Have built-in state and lifecycle methods.

    // *  Less common now with the rise of Hooks in functional components.




//############## Components Summary#########


// Components describe a part of the user Interface.

// They are re-usable and can be nested inside other components.


// ************Two types

// #  Stateless functional components
// #   Stateful Class Components





            //    Funtional Components



            



    //                                     ┌─────────────────────────┐
    //       │   Functional Component │
    //       │ (JS function returning  │
    //       │       JSX)             │
    //       └─────────────┬──────────┘
    //                     │
    //      ┌──────────────┴──────────────┐
    //      │                             │
    //  Props (Read-only)           State (Mutable)
    // ┌─────────────┐             ┌─────────────┐
    // │ Passed from │             │ Internal to │
    // │ parent      │             │ component   │
    // └─────────────┘             └─────────────┘
    //      │                             │
    //      ▼                             ▼
    //  Used to render                Can change UI
    //  dynamic content               on events / hooks
    //      │                             │
    //      └─────────────┬──────────────┘
    //                    ▼
    //              JSX Output
    //       (UI rendered in browser)



  
  
  
    //    ########### Class Components########



//                          ┌───────────────────────────┐
//            │      Class Component      │
//            │  (extends React.Component)│
//            └─────────────┬────────────┘
//                          │
//         ┌────────────────┴─────────────────┐
//         │                                  │
//     Props (Read-only)                  State (Mutable)
//    ┌─────────────┐                    ┌─────────────┐
//    │ Passed from │                    │ Internal to │
//    │ parent      │                    │ component   │
//    └─────────────┘                    └─────────────┘
//         │                                  │
//         ▼                                  ▼
//    Used to render                     Can change UI
//    dynamic content                    on events / lifecycle
//         │                                  │
//         └─────────────┬────────────────────┘
//                       ▼
//                 Render Method
//           ┌─────────────────────────┐
//           │ JSX returned here is    │
//           │ displayed in browser    │
//           └─────────────────────────┘



//   ############### Functional vs Class Components#########



    // Funtional



    // - Simpler syntax
    // use function components as much as possible 
    // Absence of 'this' keyword
    // Solution Without Using State
    // Mainly responsible for UI 
    // Stateless Dumb Presentational Components


    // Class

    
    // More complex syntax

    // More Feature Rich

    //  Maintain their own private data-State

    //  Complex UI Logic

    //  Provide lifecycle



    // ######################### JSX #################


    // JavaScript XMl (JSX)- Extension to the JavaScript language syntax

    // Wirte XML like code for elments and  components
    // JSX tags have a tag name , attributes and children
    // Jsx is not a Necessity to write React applications but it is highly recommended to use it











//*****************JSX differnces***********
// 1 Class -> className
// 2 for -> htmlFor
   

//      CamelCase property naming convention

    // # onclick -> onClick
    // # tabindex -> tabIndex
    // # maxlength -> maxLength
    // # contenteditable -> contentEditable





    // ***************************  setState*************

    //    Always make use of setState and never modify the state directly
     
    //     code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
    
    //    When you have to update state based on the previous state value ,pass in a function as an argument instead of the regular object.