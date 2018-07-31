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

    test('calls onClick function on click behavior', () => {

        const component = shallow(<PrimaryButton onClick={clickListener}/>)
        const clickListener = jest.fn()

        component.simulate('click')

        const clickListCount = clickListener.mock.calls.length
        expect(clickListCount).toBe(1);

    });

})

