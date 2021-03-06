import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/buttonLabel/buttonLabel.css'
import styles from './styles/buttonLabel/buttonLabel.scss'


const ButtonLabel = (props) => {
    return (
        <h4 className={`${styles.button_label} ${props.classes} button_label`}>
            {props.label}
        </h4>
    )

};

export default ButtonLabel;