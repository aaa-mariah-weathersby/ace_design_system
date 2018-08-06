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


    test('defualt behavior renders FormControl wrapper component', () => {
        const component = mount(<Input />)
        const inputWrapper = component.find('.field_control')
        const inputWrapperChild = inputWrapper.children().props()

        expect(inputWrapperChild.classes.input).toBe('input_field') 

    });

    test ("type prop updates input_fiel type property", () => {
        const component = mount(<Input type={'number'} />)
        const inputField = component.find('input.input_field')
        console.log('component type: ', inputField.html() )

        expect(inputField.props().type).toBe('number') 
  
    })

})
