import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


export const NotFound = () => {

    return (
        <Stack alignItems="center">


            <Typography variant='h1' sx={{ marginTop: 10, textAlign: "center" }}>
                Oops, page not found
            </Typography>
            <Typography variant='h2' sx={{ margin: 2, textAlign: "center" }}>
                This is not the page you're looking for
            </Typography>
            <Button variant="contained" color="secondary" sx={{ px: '2rem' }}
                component={RouterLink} to="/">
                Return Home
            </Button>
        </Stack>
    )
};
export default NotFound;