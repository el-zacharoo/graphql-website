import React from 'react';

import { Button as Btn } from '@mui/material';

import { Tracer } from '../../document-load';

export const Button = (props) => {
    const { children, id } = props;

    const prepareClickEvent = () => {
        const span = Tracer.startSpan(id);
        span.addEvent(`Click on ${id} link`)
        span.end();
    };

    return (
        <Btn id={id} onClick={() => prepareClickEvent()} {...props}>
            {children}
        </Btn>
    )
}
export default Button; 