import React from 'react';

import Button from '@mui/material/Button'

import { Tracer } from '../../document-load'

export const ButtonProvider = (props) => {
    const { children, id } = props;

    const prepareClickEvent = () => {
        const element = document.getElementById(id);
        const onClick = () => {
            const span = Tracer.startSpan(id);
            span.end();
        };
        element.addEventListener('click', onClick);
    };
    window.addEventListener('load', prepareClickEvent);

    return (
        <Button id={id} onClick={prepareClickEvent} {...props}>
            {children}
        </Button>
    )
}
export default ButtonProvider; 