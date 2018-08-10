import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';
import ButtonLabel from './buttonLabel';

import styles from './styles/primary/primaryButton.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


class PrimaryButton extends Component {

  state = {
    state: null

  };

  themeOverride = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          '&:hover':{
            backgroundColor: 'visible'
          }
        }
      },
      MuiButtonBase: {
        root: {
          border: ''
        },
      }
    }
  })

  render = () => {

    var rootClasses = 
      this.props.active === true 
      ? `${styles.active} active`
      : this.props.active === false 
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
          disabled={false}

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
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,

};

export default PrimaryButton;