import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { EnvelopeIcon, PhoneIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { setSearchQuery } from '../redux/querySlice';

function Drawer({ toggleDrawer }) {
  const dispatch = useDispatch();

  const user = {
    displayName: 'Guest'
  }
  return (
    <>
      <div className='backdrop-shadow' onClick={() => toggleDrawer()}></div>
      <div className='drawer p-6 overflow-y-auto'>
        <div className='flex justify-between align-center'>
          <p>Hi, {user?.displayName ?? 'Guest'}</p>
          <XMarkIcon className="h-6 w-6 cursor-pointer text-white" onClick={() => toggleDrawer()} />

        </div>
        <ul className="flex flex-col justify-between h-fll-viewport py-2" onClick={() => toggleDrawer()}>

          <div className='mt-2 border-t border-x-yellow-50 pt-2'>
            <ul className="py-2">
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('lifestyle'))}>Lifestyle</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('travel'))}>Travel</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('food & recipes'))}>Food & Recipes</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('technology'))}>Technology</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('personal development'))}>Personal Development</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('finance'))}>Finance</li>
            <li className='py-2 ml-2 text-lg cursor-pointer' role='button' onClick={() => dispatch(setSearchQuery('entertainment'))}>Entertainment</li>
            </ul>
          </div>
          <div>
            {user && (
              <div className='border-t border-b border-x-yellow-50 flex justify-between items-center'>
                <li className="mx-0">
                  <Link aria-label="Profile" to="" className='flex gap-2'> <UserIcon className='h-6 w-6' /> <span>My Profile</span></Link>
                </li>
                <li className="py-2 mx-0">
                  {user?.displayName ? <p className='cursor-pointer'>Logout</p> : <Link to="/login">Login</Link>}
                </li>
              </div>

            )}
            <div className='mt-2 pt-2 flex justify-evenly'>


              <p className='py-1 ml-2 text-md'><EnvelopeIcon className="h-6 w-6 cursor-pointer text-white" />
                <a className='ml-2' href="mailto:"></a></p>
              <p className='py-1 ml-2 text-md'><PhoneIcon className="h-6 w-6 cursor-pointer text-white" />
                <a className="ml-2" href="tel:+919999999999"></a></p>

            </div>
          </div>
        </ul>


      </div>
    </>
  )
}

export default Drawer