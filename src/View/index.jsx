import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Outline } from '../components/Outline';
import Content from '../components/Content'

export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);

    const viewFilter = data && data.assembly.reference.filter(item => item.name === view)
    const header = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Hero")
    const section = viewFilter && viewFilter[0].reference.filter(i => i.__typename === "Section")
    const content = { header: header, section: section }

    return (
        <>
            <Content content={content} />
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