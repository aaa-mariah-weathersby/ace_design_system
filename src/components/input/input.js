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

  handleChange = name => event => {
    this.setState(
        {[name]: event.target.value,},
        () => {
            if(this.props.callback)
                this.props.callback(this)
        }
    );
  };

  themeOverride = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                margin: 'none',
            }
        },
        MuiInputLabel: {
            formControl: {
                transform: 'inherit',
                top: 'none',
                fontSize: '0.9em'
            },
         },
         MuiInput: {
             focused: {
                 border: '1.5px #0099FF solid'
             }
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
        <MuiThemeProvider theme={this.themeOverride}>
            <FormControlMUI
                classes = {{
                    root: `${styles.field_control} field_control`
                }}
            >

                <InputLabelMUI
                    classes = {{
                        formControl: `${styles.input_label} input_label`,
                        root: `${styles.input_label}`
                    }}
                    
                    disableAnimation = {true}
                    shrink={false}
                >
                    {this.props.label}
                </InputLabelMUI>

                <InputMUI
                    disableUnderline = {true}
                    type = {this.props.type ? this.props.type : 'text' }
                    classes = {{
                        root: `${styles.input} input`,
                        // root: `input`,
                        input: `${styles.input_field} input_field`,
                        focused: `${styles.focused}`,
                    }}
                    name = {this.props.name}
                    onChange={this.handleChange(this.props.name)}
                
                />
            </FormControlMUI>
        </MuiThemeProvider>

    )

  }

}

export default Input;