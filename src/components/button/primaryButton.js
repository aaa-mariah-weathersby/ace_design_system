import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';

class PrimaryButton extends Component {

  state = {

  };

  render = () => {
    return ( 
      <ButtonBase 
        onClick = {this.props.onClick}
      />
    )
  }

}

// Button.propTypes = {
//   label: PropTypes.string.isRequired
// };

export default PrimaryButton;