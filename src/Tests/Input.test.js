import React from 'react';
import { shallow }  from 'enzyme';
import Input from '../Components/Reusable Components/Input'

describe('Input Test Suite', () => {

  it('should test props', () => {
    const wrapper = shallow(<Input name = "hello 4/21"/>).props()
    expect(wrapper.children.props.children[0].props.name).toBe("hello 4/21")
  })

  it('should test props v2', () => {
    const wrapper = shallow(<Input />)
    wrapper.setProps({ name: 'bar' });
    // console.log(wrapper.props().children.props.children[0].props)
    expect(wrapper.props().children.props.children[0].props.name).toEqual('bar')
  })

  it('should simulate entering text', () => {
    // const onChangeSpy = jest.fn(()=> console.log("hello April 22nd"));
    const onChangeSpy = jest.fn();

    const wrapper = shallow(<Input onChangeFunc={onChangeSpy}/>);
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    } 
    wrapper.find('input').simulate('change', event);
    expect(onChangeSpy).toHaveBeenCalled()
  })
})