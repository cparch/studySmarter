import React from 'react';
import './StudyInsights.css';

const StudyInsights = (props) => {
  return(
    <div>
      <h1>
        Study Insights
      </h1>

      <h3>
        This page is intended to give you an idea of what study habbits give you the best chance of earning a grade.
      </h3>

      <table id="myTable">
        <thead>
          <tr>
            <th className='cell tableHeader'>Grade</th>
            <th className='tableHeader'>Average Study Time </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='cell'>A</td>
            <td>6 hours</td>
          </tr>
          <tr>
            <td className='cell'>B</td>
            <td>4 hours</td>
          </tr>
        </tbody>
      </table>
      {/* <div>
        A: 20 hr
       
      </div>

      <div>
        B: 15 hr
      </div> */}
    </div>
    
  )
};

export default StudyInsights;