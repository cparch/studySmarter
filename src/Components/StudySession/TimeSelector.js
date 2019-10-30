import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

 const TimeSelector = (props) => {
  return (
    <div>
      <TimePicker
        value = {props.TimeValue}
        onChange={props.timeHandler}
        showSecond={false}
        use12Hours
      />
    </div>
  );
}

export default TimeSelector;