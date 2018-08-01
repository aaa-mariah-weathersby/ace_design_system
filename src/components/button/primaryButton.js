import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';
import ButtonLabel from './buttonLabel';

import './styles/primary/primaryButton.css'


class PrimaryButton extends Component {

  state = {

  };

  render = () => {
    return ( 
      <ButtonBase 
        onClick = {this.props.onClick}

        disableRipple = {true}
        disableTouchRipple = {true}
        focusRipple = {false}

        classes = {{
          root: 'primary_button button'
        }}

        children = { 
          <ButtonLabel
            label={this.props.label}
          />
        }
      />
    )
  }

}

// Button.propTypes = {
//   label: PropTypes.string.isRequired
// };

export default PrimaryButton;