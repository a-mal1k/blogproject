import React from 'react'
import useFetchQuery from '../hooks/useFetchQuery';
import { Blogs } from './Blogs';
import Shimmer from './Shimmer';
import LanguageToggler from './LanguageToggler';

export const Landing = () => {
    const { data, err, loading } = useFetchQuery();


    const LoadingComponent = () => (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </div>
    )

    const ErrorComponent = () => (
        <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-2 lg:m-4 p-4 rounded-lg">
            <h1>{err}</h1>
        </div>
    )

    const NoResult = () => (
        <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-2 lg:m-4 p-4 rounded-lg">
            <h1>Oops! No results found</h1>
        </div>
    )


    return (

        <main className='py-4 px-2 lg:px-4'>
            {loading ? <LoadingComponent /> : err.length ? <ErrorComponent /> : !data.length ? <NoResult /> : (
                <>
                    <LanguageToggler />
                    <Blogs data={data} />
                </>
            )}
        </main>

    )
}
