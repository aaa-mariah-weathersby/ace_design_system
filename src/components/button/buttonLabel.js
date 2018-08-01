import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/buttonLabel/buttonLabel.css'

const ButtonLabel = (props) => {
    return (
        <h4 className={"button_label"}>
            {props.label}
        </h4>
    )

};

export default ButtonLabel;