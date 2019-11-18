import React from 'react';
import './SideDrawer.css';
import Nav from './Nav.js'

class SideDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showSideDrawer: false
    }
    this.showSideDrawer = this.showSideDrawer.bind(this)
  }

  showSideDrawer(){
    // console.log(this.state)
    this.setState({showSideDrawer : !this.state.showSideDrawer})
  }
  render(){
    let toggleSideDrawer = 'SideDrawer Open'
    if(this.state.showSideDrawer){
      toggleSideDrawer = 'SideDrawer Close'

    }
    return(
      <div className={toggleSideDrawer}>
        <div 
          className='mobileNav'
          onClick={this.showSideDrawer}
        > toogle button</div>
      </div>
    )
  }
}

export default SideDrawer;