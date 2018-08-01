import React from 'react';

import PrimaryButton from './primaryButton';
import ButtonLabel from './buttonLabel'
import ButtonBase from '@material-ui/core/Button';

import { shallow, mount } from 'enzyme';


describe('Primary Button', () => {

    beforeEach(() => {

    })

    test('defualt behavior renders primary button element with primary_button class', () => {
        const component = mount(<PrimaryButton />)

        expect(component.find('button').hasClass('primary_button')).toBe(true) 

    });

    test('defualt behavior renders ButtonLabel child component', () => {
        const component = shallow(<PrimaryButton />)

        expect(component.find(ButtonLabel).length).toBe(1) 
        expect(component.props().children.type).toBe(ButtonLabel) 

    });

    test('default ripple behaviors have been disabled', () => {
        const defaultProps = {
            disableRipple: true,
            disableTouchRipple: true,
            focusRipple: false,
        }
        const component = shallow(<PrimaryButton />)
        const componentProps = component.props()
       
        expect(componentProps.disableRipple).toBe(defaultProps.disableRipple)
        expect(componentProps.disableTouchRipple).toBe(defaultProps.disableTouchRipple)
        expect(componentProps.focusRipple).toBe(defaultProps.focusRipple)

    })

    test('renders button with label copy', () => {
        const labelCopy = "primary label"
        const component = mount(<PrimaryButton label={labelCopy} />)

        expect(component.find('.button_label').length).toBe(1)
        expect(component.find('.button_label').text()).toBe(labelCopy)

    });

    test('calls onClick function on click behavior', () => {
        const clickListener = jest.fn()
        const component = shallow(<PrimaryButton onClick={clickListener}/>)

        component.simulate('click')

        const clickListCount = clickListener.mock.calls.length
        expect(clickListCount).toBe(1);

    });

})

