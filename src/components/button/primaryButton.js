import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/Button';
import ButtonLabel from './buttonLabel';

// import './styles/primary/primaryButton.css'
import styles from './styles/primary/primaryButton.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


class PrimaryButton extends Component {


  state = {

  };

  themeOverride = createMuiTheme({
    overrides: {
      MuiButtonBase: {
        root: {
          backgroundColor: 'rgba(0, 153, 255, 1)',
        }
      }
    }
  })

  render = () => {

    return ( 
      <MuiThemeProvider theme={this.themeOverride}>
        <ButtonBase 
          onClick = {this.props.onClick}

          disableRipple = {true}
          disableTouchRipple = {true}
          focusRipple = {false}

          classes = {{
            root: styles.primary_button
          }}

          children = { 
            <ButtonLabel
              label={this.props.label}
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