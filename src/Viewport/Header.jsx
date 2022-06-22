import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { query } from '../client'


export const Header = () => {
    const { data } = useQuery(query);

    return (
        <AppBar elevation={0} color="primary" position="relative" sx={{ padding: 1 }}>
            {data &&
                <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} component={RouterLink} to="/">
                        <Typography variant="h4">{import.meta.env.VITE_APP_NAME}</Typography>
                    </Link>
                    <Box>
                        {data.assembly.reference.map((item, i) =>
                            <Button color="info" component={RouterLink} to={`/${item.name}`} key={i}>{item.name}</Button>
                        )}
                    </Box>
                </Toolbar>
            }
        </AppBar >
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
