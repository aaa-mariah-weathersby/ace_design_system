import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';

import './styles/primary/primaryButton.css'

class PrimaryButton extends Component {

  state = {

  };

  render = () => {
    return ( 
      <ButtonBase 
        onClick = {this.props.onClick}
        classes = {{
          root: 'primary_button button'
        }}

        // component={'div'}
      />
    )
  }

}

// Button.propTypes = {
//   label: PropTypes.string.isRequired
// };

export default PrimaryButton;