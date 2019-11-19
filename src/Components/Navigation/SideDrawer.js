import React from 'react';
import './SideDrawer.css';
import Nav from './Nav.js'

class SideDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showSideDrawer: false
    }
    this.toggleSideDrawerHandler = this.toggleSideDrawerHandler.bind(this);
  }

  toggleSideDrawerHandler(){
    console.log("mobile menu clicked")
    this.setState({showSideDrawer: !this.state.showSideDrawer})
  }

  render(){
    let toggleSideDrawer = 'SideDrawer Close'; 

    if(this.state.showSideDrawer){
      toggleSideDrawer = 'SideDrawer Open'
    }
    return(
      <div >
        <div className='menuBtn' onClick={this.toggleSideDrawerHandler}>Menu</div>
        <div 
          className={toggleSideDrawer}
          onClick={this.toggleSideDrawerHandler}
        >
          <Nav/>
        </div>
      </div>
    )
  }
}

export default SideDrawer;