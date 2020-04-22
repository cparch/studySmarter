import React from 'react';
import { shallow, mount, render }  from 'enzyme';
import AddClassName from '../Components/AddClass.js';
import AddClass from '../Components/AddClass.js';

describe('addClassName Test Suite', () => {

  it('should render the form', () => {
      let wrapper = shallow(<AddClassName />);

      // expect(wrapper.find('form').exists()).toBe(true);
      expect(wrapper.find('form.test').exists()).toBe(true);
      // expect(wrapper.find('.AddClassHeaderImage').exists()).toBe(true);
      // expect(wrapper.find('.AddClassHeaderImages').exists()).toBe(false);
      // expect(wrapper.find('#test').exists()).toBe(true);
  })

  it('should test if component Input exists', ()=>{
    let wrapper = shallow(<AddClassName />);
    expect(wrapper.find('Input.enzymeTest').exists()).toBe(true)
  })

  it ('should ensure ux is present as expected', () => {
    let wrapper = shallow(<AddClassName/>);

    expect(wrapper.find('.AddClassHeaderImage').exists()).toBe(true)
  })
})