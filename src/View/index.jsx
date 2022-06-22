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

    const filter = data && data.assembly.reference.filter(item => item.name === view)

    return (
        <>
            {filter &&
                <p >{filter[0].name}</p>
            }
        </>
    )
}