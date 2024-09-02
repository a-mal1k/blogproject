import React from 'react'
import { MagnifyingGlassIcon, UserIcon, Bars4Icon  } from '@heroicons/react/24/solid';

export const Header = () => {
    return (
        <header className='flex flex-wrap items-center gap-5 justify-between bg-gray-900 py-2 px-5'>
        <div className="text-3d text-white text-lg lg:text-3xl my-2 lg:my-4">
        Blog<span role="img" aria-label="winking face">😉</span>pedia
        </div>
        <div className='flex items-center border-b-2 border-b-white pb-2 flex-shrink-0 lg:w-auto w-full lg:order-1 order-3'>
            <MagnifyingGlassIcon className="h-6 w-6 text-white mr-2" />
            <input type='text' name='search' id="search" className='bg-transparent text-white focus:border-none focus:outline-none w-full' placeholder='Search...' />
        </div>
        <div className='nav-items flex items-center gap-4 flex-shrink-0 lg:order-2 order-2'>
            <UserIcon className="h-6 w-6 text-white" />
            <Bars4Icon className="h-6 w-6 text-white" />
        </div>
    </header>
    
    )
}
