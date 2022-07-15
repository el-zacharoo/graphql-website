import React from 'react';

import ButtonProvider from '../ButtonProvider';
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
        <Grid item xs={12} sm={3} sx={{ border: 1, borderRadius: '4px', borderColor: 'background.paper', p: 2, mx: 1 }}>
            <Typography variant="subtitle2" >{content.title}</Typography>
            <Typography variant="caption">{content.datePublished}</Typography>
            <Typography>{content.description.text}</Typography>
            <ButtonProvider id={content.title} variant="contained" color="secondary">Read More</ButtonProvider>
        </Grid>
    )
}

export default BlogSection;

export const Blog = (props) => {
    const { content } = props;
    return (
        <>
            <Typography variant="subtitle2" >{content.title}</Typography>
            <Typography variant="caption">{content.datePublished}</Typography>
            <Typography>{content.description.text}</Typography>
        </>
    )

}