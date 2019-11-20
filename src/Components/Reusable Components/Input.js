import React from 'react';
import './Input.css';

const Input = (props) => {
  return(
    <div class="page">
      <label class="field a-field a-field_a1">
        <input 
          class="field__input a-field__input" 
          placeholder={props.placeholder} 
          name={props.name} 
          onChange={props.onChangeFunc}
          value={props.value}
          required
        />
        <span class="a-field__label-wrap">
          <span class="a-field__label">{props.label}:</span>
        </span>
    </label>
  </div>
  )
}

export default Input;