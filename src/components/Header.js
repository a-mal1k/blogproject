import React, {useState} from 'react'
import { MagnifyingGlassIcon, UserIcon, Bars4Icon  } from '@heroicons/react/24/solid';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/querySlice';

export const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        if(drawerOpen) {
          setDrawerOpen(false)
          document.body.classList.remove('overflow-hidden');
        } else {
          setDrawerOpen(true)
          document.body.classList.add('overflow-hidden');
        }
      }
    return (
        <>
        <header className='flex flex-wrap items-center sticky top-0 z-10  gap-5 justify-between bg-gray-900 py-2 px-5'>
        <Link to='/' className="text-3d text-white text-lg lg:text-3xl my-2 lg:my-4">
        Blogo<span role="img" aria-label="winking face"></span>pedia
        </Link>

        <ul className='text-white gap-5 hidden lg:flex'>
          <li className='text-md font-medium cursor-pointer' role='button'  onClick={()=> dispatch(setSearchQuery('Uncategorized'))}>All</li>
          <li className='text-md font-medium cursor-pointer' role='button' onClick={()=> dispatch(setSearchQuery('technology'))}>Technology</li>
          <li className='text-md font-medium cursor-pointer' role='button' onClick={()=> dispatch(setSearchQuery('lifestyle'))}>Lifestyle</li>
          <li className='text-md font-medium cursor-pointer' role='button' onClick={()=> dispatch(setSearchQuery('travel'))}>Travel</li>
          <li className='text-md font-medium cursor-pointer' role='button' onClick={()=> dispatch(setSearchQuery('entertainment'))}>Entertainment</li>
        </ul>
  
        <div className='nav-items flex items-center gap-4'>
             <Link to='/search'>
            <MagnifyingGlassIcon className="h-6 w-6 text-white mr-2" />
            </Link>
            <UserIcon className="h-6 w-6 text-white" />
            <Bars4Icon className="h-6 w-6 text-white cursor-pointer" onClick={toggleDrawer} />
        </div>
    </header>
    {drawerOpen && <Drawer toggleDrawer={toggleDrawer}/>}
    </>
    )
}
