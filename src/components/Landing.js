import React from 'react'
import useFetchQuery from '../hooks/useFetchQuery';

export const Landing = () => {
    const query = 'technology page:1 page-size:10';
    const {data, err} = useFetchQuery(query);
    if(err.length) return <h1>{err}</h1>
    return (
        <>
            {data.length == 0 ? 'Loading...' : <div>{data.map(item => (<li key={item.id}>{item.author}</li>))}</div>}
        </>
    )
}
