import React from 'react';

import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Hero = (props) => {
    const { content } = props;

    return (
        <Stack sx={{ py: 12, backgroundColor: 'primary.main' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
                <Typography variant="h2" color="info.main">{content.primaryHeader}</Typography>
                <Typography variant="subtitle2" color="info.main" >{content.subheader}</Typography>
            </Container>
        </Stack >
    )
}
export default Hero

