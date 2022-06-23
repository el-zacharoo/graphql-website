import React from 'react';

import Box from '@mui/material/Box'

export const Section = (props) => {
    const { content } = props;

    return (
        <Box>
            <p >{content.header}</p>
            <p >{content.description}</p>
        </Box>
    )
}