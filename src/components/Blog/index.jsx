import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const BlogSection = (props) => {
    const { content } = props;

    return (
        <Grid
            sx={{ my: 4 }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {content.blogs.map((item, i) =>
                <BlogCard key={i} content={item} />
            )}
        </Grid>
    )
}

const BlogCard = (props) => {
    const { content } = props;

    return (
        <Grid item sm={3} xs={12} sx={{ border: 1, broderColor: 'primary.main', p: 2, mx: 1 }}>
            <Typography variant="subtitle2" >{content.title}</Typography>
            <Typography>{content.datePublished}</Typography>
            <Typography>{content.description.text}</Typography>
        </Grid>
    )
}
