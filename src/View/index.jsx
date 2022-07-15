import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';
import { Outline } from '../components/Outline';
import Content from '../components/Content'
import './document-load';

export const View = () => {
    const view = slug()
    const { data, loading } = useQuery(query);

    return (
        <>
            <Content content={{ data: data, view: view }} />
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

export default View; 