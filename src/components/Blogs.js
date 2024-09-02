import React, { Fragment } from 'react'
import { Blog } from './Blog'

export const Blogs = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map(item => (
                <Fragment key={item.id}>
                    <Blog item={item} />
                </Fragment>
            ))}
        </div>
    )
}
