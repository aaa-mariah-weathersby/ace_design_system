import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputMUI from '@material-ui/core/Input';
import InputLabelMUI from '@material-ui/core/InputLabel';
import FormControlMUI from '@material-ui/core/FormControl';

import styles from './styles/input.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { inherits } from 'util';


class Input extends Component {

  state = {
    state: null

  };

  themeOverride = createMuiTheme({
    overrides: {
      MuiInput: {
    //     root: {
    //       backgroundColor: inherits,
    //       '&:hover': {
    //         backgroundColor: inherits,
    //       },
    //       border: inherits,
    //     },

      }
    }
  })

  render = () => {

    // var rootClasses = 
    // this.props.active == true 
    // ? `${styles.active} active`
    // : this.props.active == false 
    //   ? `${styles.disabled} disabled`
    //   : `idle`

    return (
        
        <FormControlMUI
            classes = {{
                root: `field_control`
            }}
        >
            <InputLabelMUI
                classes = {{
                    formControl: `input_label`
                }}
            >
                {/* {this.props.label}
                testing */}
            </InputLabelMUI>
            <InputMUI
                disableUnderline = {true}
                type = {this.props.type ? this.props.type : 'text' }
                classes = {{
                    root: `input`,
                    input: `input_field`
                }}
            
            />
        </FormControlMUI>

    )

  }

}

export default Input;