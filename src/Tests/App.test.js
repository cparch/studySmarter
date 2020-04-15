import React from 'react';
import { shallow, mount, render }  from 'enzyme';
import App from '../App.js';

describe('addClassName Test Suite', () => {

  it('should test if FormHandler() adds the value to state.classNameToAdd', ()=>{
    let wrapper = shallow(<App/>);
    let valueToCheck = "art"

    wrapper.instance().FormHandler({target:{value: valueToCheck, name: "classNameToAdd"}})
    expect(wrapper.state('classNameToAdd')).toEqual(valueToCheck)

  })

  it('should test is submitAcknowledged() state.showSubmitConfirmation sets back ti false', () => {
    let wrapper = shallow(<App/>);
    // console.log(wrapper.state('showSubmitConfirmation'))
    wrapper.setState({showSubmitConfirmation: true})
    // console.log(wrapper.state('showSubmitConfirmation'))
    wrapper.instance().submitAcknowledged()
    expect(wrapper.state('showSubmitConfirmation')).toBeFalsy()
  })






















  //Since the text above passed, that shows that the component does exist. 
  // it('should simulate entering text into form', ()=> {
  
  //   const onChangeSpy = jest.fn()

  //     let wrapper = shallow(<AddClassName  formHandler = {onChangeSpy}/>);
      

    //simulate end user typing new class name in input:
      // not working:
        // ↓ examples from https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md#common-gotchas
          // wrapper.find('Input.enzymeTest').simulate('change', {target: {value: 'Your new Value'}})


          // wrapper.find('Input.enzymeTest').props().onChangeFunc("hello");
          // wrapper.find('Input.enzymeTest').simulate('keydown', { which: 'a' })

          // wrapper.find('Input').at(0).simulate('change', {target: {value: 'Your new Value'}});

          // expect(onChangeSpy).toHaveBeenCalled()

    // How do I test to ensure that the simulated text has been added?
      // ↓ this seems to get the properties of the component which would inform me if the simulated text has been entered
      // console.log(wrapper.find('Input').props())


    // expect(wrapper.find('Input').event.target.value).toBe('Your new Value');
    // wrapper.find('input.button').simulate('click');

    //checks state: classNameToAdd should be updated as the onChange func should update the state on change
      // let testWrapper = shallow(<App />)
      // console.log(testWrapper.state())
    // expect(wrapper.state('mirror')).toBe('Your new Value');
  // })
})