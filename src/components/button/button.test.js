import React from 'react';

import PrimaryButton from './primaryButton';
import ButtonBase from '@material-ui/core/Button';

import { shallow, mount } from 'enzyme';


describe('Primary Button', () => {

    // const component = shallow(
    //     <PrimaryButton 
    //         onClick={clickListener}
    //     />
    // )

    beforeEach(() => {

    })

    test('defualt behavior renders primary button element with primary_button class', () => {

        const component = mount(<PrimaryButton />)
        
        expect(component.find('button').hasClass('primary_button')).toBe(true)

    });

    test('calls onClick function on click behavior', () => {

        const clickListener = jest.fn()
        const component = shallow(<PrimaryButton onClick={clickListener}/>)

        component.simulate('click')

        const clickListCount = clickListener.mock.calls.length
        expect(clickListCount).toBe(1);

    });

})

