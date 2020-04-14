import React from 'react';
import { shallow, mount, render }  from 'enzyme';
import AddClassName from '../Components/AddClass.js';
import App from '../App.js';

describe('addClassName Test Suite', () => {

  it('should render the form', () => {
      let wrapper = shallow(<AddClassName />);

      // expect(wrapper.find('form').exists()).toBe(true);
      expect(wrapper.find('form.test').exists()).toBe(true);
      // expect(wrapper.find('.AddClassHeaderImage').exists()).toBe(true);
      // expect(wrapper.find('.AddClassHeaderImages').exists()).toBe(false);
      // expect(wrapper.find('#test').exists()).toBe(true);
  })

  it('should text if component Input exists', ()=>{
    let wrapper = shallow(<AddClassName />);
    expect(wrapper.find('Input.enzymeTest').exists()).toBe(true)
  })

  //Since the text above passed, that shows that the component does exist. 
  it('should simulate entering text into form', ()=> {
    // doesn't work with shallow or mount
      let wrapper = shallow(<AddClassName />);
      // let wrapper = mount(<AddClassName />);


    //simulate end user typing new class name in input:
      // not working:
        // ↓ examples from https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md#common-gotchas
          wrapper.find('Input.enzymeTest').simulate('change', {target: {value: 'Your new Value'}})
          // wrapper.find('Input').at(0).simulate('change', {target: {value: 'Your new Value'}});

    // How do I test to ensure that the simulated text has been added?
      // ↓ this seems to get the properties of the component which would inform me if the simulated text has been entered
      console.log(wrapper.find('Input').props())


    // expect(wrapper.find('Input').event.target.value).toBe('Your new Value');
    // wrapper.find('input.button').simulate('click');

    //checks state: classNameToAdd should be updated as the onChange func should update the state on change
      let testWrapper = shallow(<App />)
      console.log(testWrapper.state())
    // expect(wrapper.state('mirror')).toBe('Your new Value');
  })
})