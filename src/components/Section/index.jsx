import React from 'react';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';


export const Section = ({ content }) => {
    const left = () => {
        if (content.direction === null) {
            return 'Left'
        }
        if (content.direction === 'Left') {
            return 'Left'
        }
    }
    const direction = left()
    const background = direction ? { backgroundColor: 'background.paper', py: 6 } : { py: 6 }

    return (
        <Box sx={background}>
            <Container maxWidth="lg" >
                {direction && <Left content={content} />}
                {content.direction === 'Centre' && <Centred content={content} />}
                {content.direction === 'Right' && <Right content={content} />}
            </Container>
        </Box>
    )
}

Section.propTypes = {
    content: PropTypes.any,
};

const Left = ({ content }) => {
    return (
        <Grid
            container
            justifyContent="center"
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={2}
        >
            <Grid item xs={12} md={6}>
                <Typography >{content.header}</Typography>
                <Typography >{content.description}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}>
                    {/* {content.image.url &&
                        <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                            image={content.image.url} alt={content.image.alt} />
                    } */}
                </Box>
            </Grid>
        </Grid >
    )
}
Left.propTypes = {
    content: PropTypes.object,
};

const Centred = ({ content }) => {
    return (
        <Grid
            container
            spacing={2}
            direction={{ xs: 'column-reverse', md: 'column' }}
            justifyContent="center"
        >
            <Grid item>
                <Typography >{content.header}</Typography>
                <Typography sx={{ display: 'flex', justifyContent: { md: 'center' } }} >{content.description}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* {content.image.url &&
                    <CardMedia sx={{ maxWidth: '20rem' }} component="img"
                        image={content.image.url} alt={content.image.alt} />
                } */}
            </Grid>
        </Grid >
    )
}
Centred.propTypes = {
    content: PropTypes.object,
};

const Right = ({ content }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={2}
        >
            <Grid item sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }} xs={12} md={6}>
                {/* {content.image.url &&
                    <CardMedia component="img" sx={{ maxWidth: '25rem' }}
                        image={content.image.url} alt={content.image.alt} />
                } */}
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography >{content.header}</Typography>
                <Typography >{content.description}</Typography>
            </Grid>
        </Grid>
    )
}
Right.propTypes = {
    content: PropTypes.object,
};

// const Wrapper = ({ children }) => {
//     const [home] = useSinglePrismicDocument("home");
//     return (
//         <>
//             {home && home.data.body.map((e, i) =>
//                 <Box sx={!(i % 2) ? { backgroundColor: 'background.paper' } : {}} key={i}>
//                     {children}
//                 </Box >
//             )}
//         </>
//     )
// }
// Wrapper.propTypes = {
//     children: PropTypes.any,
// };