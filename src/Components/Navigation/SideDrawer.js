import React from 'react';
import './SideDrawer.css';
import Nav from './Nav.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import {sideDrawerToggle} from '../../actions/index'

const SideDrawer = (props) => {
  const dispatch = useDispatch()
  const showSideDrawer = useSelector(state => state.sideDrawerToggle.showSideDrawer)
  let toggleSideDrawer = 'SideDrawer Close'; 

  if(showSideDrawer){
    toggleSideDrawer = 'SideDrawer Open'
  }
  return(
    <div class= 'mobile-nav-container' >
      <div className='menuBtn' onClick={() => dispatch(sideDrawerToggle())}>
        <div className='menuBtnContainer'>
          <FontAwesomeIcon icon={faBars} color="black" size="lg" />
        </div>
      </div>
      <div 
        className={toggleSideDrawer}
        onClick={ () => dispatch(sideDrawerToggle())}
      >
        <Nav/>
      </div>
    </div>
  )
}

export default SideDrawer;