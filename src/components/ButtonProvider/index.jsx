import React from 'react';

import Button from '@mui/material/Button';

import { Tracer } from '../../document-load';

export const ButtonProvider = (props) => {
    const { children, id } = props;

    const prepareClickEvent = () => {
        const span = Tracer.startSpan(id);
        span.addEvent(`Click on ${id} link`)
        span.end();
    };

    return (
        <Button id={id} onClick={() => prepareClickEvent()} {...props}>
            {children}
        </Button>
    )
}
export default ButtonProvider; 