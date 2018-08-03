import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';
import ButtonLabel from './buttonLabel';

// import './styles/primary/primaryButton.css'
import styles from './styles/primary/primaryButton.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { inherits } from 'util';


class PrimaryButton extends Component {

  state = {
    state: null

  };

  themeOverride = createMuiTheme({
    overrides: {
      MuiButtonBase: {
        root: {
          backgroundColor: inherits,
          border: inherits
        }
      }
    }
  })

  render = () => {

    var rootClasses = 
      this.props.active == true 
      ? `${styles.active} active`
      : this.props.active == false 
        ? `${styles.disabled} disabled`
        : `idle`


    return ( 
      <MuiThemeProvider theme={this.themeOverride}>
        <ButtonBase 
          onClick = {this.props.onClick}

          disableRipple = {true}
          disableTouchRipple = {true}
          focusRipple = {false}

          classes = {{
            root: `${styles.primary_button} ${rootClasses} primary_button`
          }}

          children = { 
            <ButtonLabel
              label={this.props.label}
              classes={
                styles.button_label
              }
            />
          }
        />
      </MuiThemeProvider>
    )
  }

}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default PrimaryButton;