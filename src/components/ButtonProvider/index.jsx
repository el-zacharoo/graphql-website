import React from 'react';

import Button from '@mui/material/Button';

import { Tracer } from '../../document-load';

export const ButtonProvider = (props) => {
    const { children, id } = props;

    const prepareClickEvent = () => {
        const span = Tracer.startSpan(id);
        span.end();
    };

    return (
        <Button id={id} onClick={() => prepareClickEvent()} {...props}>
            {children}
        </Button>
    )
}
export default ButtonProvider; 