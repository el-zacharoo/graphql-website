import React from 'react';

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { query } from '../client';

const slug = () => {
    const { view } = useParams();
    if (view === undefined) {
        return 'home'
    }
    return view
}

export const View = () => {
    const view = slug()
    const { data, loading, error } = useQuery(query);
    console.log(view)

    return (
        <>
            {data && data.assembly.reference.map((item, i) =>
                <p>test</p>
            )}
        </>
    )
}