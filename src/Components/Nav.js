import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  return (
    <nav className='sidenav'>
      <h3>StudySmarter</h3>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>

        <Link to='/addclass'>
          <li>Add Class</li>
        </Link>

        <Link to='/addtest'>
        <li>Add Test</li>
        </Link>
        
        <Link to='/addstudysession'>
          <li>Add Study Session</li>
        </Link>

        <Link to='/addGrade'>
          <li>Add Test Grade</li>
        </Link>



        
        
      </ul>
    </nav>
  )
};

export default Nav;