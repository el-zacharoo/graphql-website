import React from 'react';

import { Hero } from '../Hero';
import { Section } from '../Section';
import { BlogSection } from '../Blog';

export const Content = (props) => {
    const { content } = props;

    const viewFilter = content.data && content.data.assembly.reference.filter(item => item.name === content.view);
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero");
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section");
    const blog = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "BlogSection");
    console.log(blog)

    return (
        <>
            {header &&
                <Hero content={{ primaryHeader: header[0].primaryHeader, subheader: header[0].subheader }} />
            }
            {section && section.map((item, i) =>
                <Section content={{ header: item.header, direction: item.direction }} key={i} />
            )}
            {blog && blog.length > 0 && <BlogSection content={blog[0]} />}
        </>
    )
}
export default Content; 