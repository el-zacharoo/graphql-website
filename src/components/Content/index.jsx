import React from 'react';

import { Hero } from '../Hero';
import { Section } from '../Section';

export const Content = (props) => {
    const { content } = props;

    const viewFilter = content.data && content.data.assembly.reference.filter(item => item.name === content.view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")

    return (
        <>
            {header &&
                <Hero content={{ primaryHeader: header[0].primaryHeader, subheader: header[0].subheader }} />
            }
            {section && section.map((item, i) =>
                <Section content={{ header: item.header, direction: item.direction }} key={i} />
            )}
        </>
    )
}
export default Content; 