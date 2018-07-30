import React from 'react';
import Chai from 'chai';
import { shallow } from 'enzyme';

import Button from './button';

Chai.should();

describe('Button Component', () => {
  let subject;

  it('should render a button with a label', () => {
    const myLabel = "Click Me !";

    subject = shallow(<Button label={ myLabel } />);

    subject.find('.button').length.should.eql(1);

    // .text() won't work as we are encapsulating the Button library (not <button> element)
    subject.find('.button').childAt(0).text().should.eql(myLabel);
  });

});
