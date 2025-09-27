import React, { PureComponent } from "react";
import './App.css';
import Greet from './component/Greet'; 
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";
import List from "./component/List";
import Stylesheet from "./component/Stylesheet";
import Inline from "./component/Inline";
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from "./component/Form";
import LifecyleA from "./component/LifecyleA";
import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";
import Purecomp from "./component/Purecomp";
import Parentcomp from "./component/Parentcomp";
import RefsDemo from "./component/RefsDemo";
import FocusInput from "./component/FocusInput";
import FRParentInput from "./component/FRParentInput";
import PortalDemo from "./component/PortalDemo";
import Hero from "./component/Hero";
import ErrorBoundary from "./component/ErrorBoundary";
import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";

import ClickCounter2 from "./component/ClickCounter2";
import HoverCounterTwo from "./component/HoverCounterTwo";
import User from "./component/User";
import RenderProps from "./component/RenderProps";
import { UserProvider } from "./component/UserContext";
import ComponentC from "./component/ComponentC";



function App() {
  return (
    <div className="App">

      <UserProvider value="Sebin">
        <ComponentC/>
      </UserProvider>
{/*      
     <RenderProps>
  {(count, incrementCount) => (
    <ClickCounter2 count={count} incrementCount={incrementCount} />
  )}
</RenderProps>
   <RenderProps>
  {(count, incrementCount) => (
    <HoverCounterTwo count={count} incrementCount={incrementCount} />
  )}
</RenderProps>
 */}

{/* <ClickCounter2></ClickCounter2>
<HoverCounterTwo></HoverCounterTwo>
<User render= { (isLoggedIn)=> isLoggedIn ? 'Sebin' : 'Guest'}></User> */}

      {/* <ClickCounter name="Sebin"></ClickCounter>
      <HoverCounter></HoverCounter> */}
     {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" /> 
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Wonder Woman" />
      </ErrorBoundary> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <Parentcomp></Parentcomp> */}
      {/* <Purecomp></Purecomp> */}
      {/* <LifecyleA></LifecyleA> */}
   
    {/* <Table></Table> */}
      {/* <Form></Form> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}> Success</h1> */}
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}

      {/* <List></List> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* // <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Counter></Counter> */}
      {/* <Greet name="Bruce " heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan">  
        <button>Action</button>
      </Greet>
     <Greet name="Diana" heroName=" Wonder Woman"/> */}
    {/* <Welcome name="Bruce " heroName="Batman"></Welcome>
    <Welcome name="Clark" heroName="SuperMan"></Welcome>
    <Welcome name="Diana" heroName="Wonder Woman"></Welcome> */}

      {/* <Message></Message> */}

      {/* <Welcome />
      <Hello /> */}
    </div>
  );
  // return React.createElement('div',{id:'hello',className:'dummyclass'},
  //    React.createElement('h1',null,'Hello Sebin') 





  






























     
}

export default App;
































