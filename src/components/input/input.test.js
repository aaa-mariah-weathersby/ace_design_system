import React from 'react';

import Input from './input';

import { shallow, mount } from 'enzyme';


describe.only('Input Field', () => {

    beforeEach(() => {

    })

    test('defualt behavior renders Input component with input_field class', () => {
        const component = mount(<Input />)

        expect(component.find('input').hasClass('input_field')).toBe(true) 

    });

    test('defualt behavior renders Input component and sibling label', () => {
        const component = mount(<Input />)
        const inputWrapper = component.find('.field_control')
        const wrapperChild_input = inputWrapper.find('input.input_field')
        const wrapperChild_label = inputWrapper.find('label.input_label')
        
        expect(wrapperChild_input.length).toBe(1) 
        expect(wrapperChild_label.length).toBe(1) 
    });


    test ("type prop updates input_fiel type property", () => {
        const component = mount(<Input type={'number'} />)
        const inputField = component.find('input.input_field')

        expect(inputField.props().type).toBe('number') 
  
    })

})
