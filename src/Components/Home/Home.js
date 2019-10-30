import React from 'react';

const Home = (props) => {
  const courseNames = props.classList.map((courseInfo) => {
    return(
      <div>
          {courseInfo.classTitle}   
      </div>
    )
  })

  return (
    <div>
      <div>
        Class Names:
      </div>
      <div>
        {courseNames}
      </div>
    </div>
  )
};

export default Home;