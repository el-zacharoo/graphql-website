import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Outline } from '../components/Outline';
import { NotFound } from './NotFound';

export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")

    console.log(data)


    return (

        <>

            {header &&
                <Hero content={{ primaryHeader: header[0].primaryHeader, subheader: header[0].subheader }} />
            }
            {section && section.map((item, i) =>
                <Section content={{ header: item.header, direction: item.direction }} key={i} />
            )}
            <Outline visible={loading} />

        </>
    )
}

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}