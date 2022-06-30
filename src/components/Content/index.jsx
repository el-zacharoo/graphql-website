import React from 'react';

import { Hero } from '../Hero';
import { Section } from '../Section';

export const Content = (props) => {
    const { content } = props;

    return (
        <>
            {content.header &&
                <Hero content={{ primaryHeader: content.header[0].primaryHeader, subheader: content.header[0].subheader }} />
            }
            {content.section && content.section.map((item, i) =>
                <Section content={{ header: item.header, direction: item.direction }} key={i} />
            )}
        </>
    )
}
export default Content; 