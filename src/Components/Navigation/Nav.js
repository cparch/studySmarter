import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  return (
    <nav className='sidenav'>
      <span className='sideNavHeader'>StudySmarter</span>
      <div className='sideNavList' >
        <NavLink exact to='/' activeClassName="chosen">Home</NavLink>
        <NavLink to='/addclass' activeClassName="chosen">Add Class</NavLink>
        <NavLink to='/addtest' activeClassName="chosen">Add Test</NavLink>
        <NavLink to='/addstudysession' activeClassName="chosen">Add Study Session</NavLink>
        <NavLink to='/addGrade' activeClassName="chosen">Add Test Grade</NavLink>
        <NavLink to= '/StudyInsights' activeClassName="chosen">Study Insights</NavLink>
      </div>
    </nav>
  )
};

export default Nav;