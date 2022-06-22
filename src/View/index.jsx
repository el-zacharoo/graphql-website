import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Hero } from '../components/Hero';
import { Outline } from '../components/Outline'

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}

export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")

    console.log(section)

    return (
        <>

            <>
                {header &&
                    <Hero text={{ primaryHeader: header[0].primaryHeader, subheader: header[0].subheader }} />
                }

            </>


            <Outline visible={loading} />
        </>
    )
}