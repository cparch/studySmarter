import React from 'react';
import './Input.css';

const Input = (props) => {
  return(
    <div className="page" data-test="reusable-form">
      <label className="field a-field a-field_a1">
        <input 
          className="field__input a-field__input" 
          placeholder={props.placeholder} 
          name={props.name} 
          onChange={props.onChangeFunc}
          value={props.value}
          required
        />
        <span className="a-field__label-wrap">
          <span className="a-field__label">{props.label}:</span>
        </span>
    </label>
  </div>
  )
}

export default Input;