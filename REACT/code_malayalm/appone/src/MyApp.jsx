import React, { Component } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import DummyPage from './Pages/DummyPage';
class MyApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currentSelect:'home'
      }
    }
    
    handleMenuSelect=(value)=>{
        this.setState({
            currentSelect:value
        })
    }

    getPage(){
        const{
            currentSelect
        }=this.state
        switch (currentSelect) {
            case 'home':
                  return  <HomePage></HomePage>
            case 'usage':
                return <DummyPage key="usage" name="Usage"></DummyPage>
            case 'settings':
                return <DummyPage key="settings" name="Settings"></DummyPage>
            case 'logout':
                return <DummyPage key="logout" name="Logout"></DummyPage>
            default:
                break;
        }
    }
  render() {
    return (
     <div className='app'>
   <Header onMenuSelect={this.handleMenuSelect}></Header>

    <div className='app-body'>
        {this.getPage()}

    </div>

    <Footer></Footer>
  </div>
    )
  }
}
export default MyApp




