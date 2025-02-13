'use client';

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';


const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
    <SignedIn>
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/' className='sidebar-logo'>
         <Image src='/assets/images/Imegino.png' alt='logo' width={180} height={28}/>
        </Link> 

        <nav className='sidebar-nav'>
                <ul className='sidebar-nav_elements'>
                    {navLinks.slice(0,6).map((link) => {
                        const isActive = link.route === pathname
                        return (
                            <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-pink-400 text-white' : 'text-gray-700'}`}>
                                <Link className='sidebar-link' href={link.route}>
                                 <Image 
                                   src={link.icon}
                                   alt='logo'
                                   width={24}
                                   height={24}
                                   className={`${isActive && 'brightness-200'}`}
                                 />
                                 {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className='sidebar-nav_elements'>
                    {navLinks.slice(6).map((link) => {
                        const isActive = link.route === pathname
                        return (
                            <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-pink-400 text-white' : 'text-gray-700'}`}>
                                <Link className='sidebar-link' href={link.route}>
                                 <Image 
                                   src={link.icon}
                                   alt='logo'
                                   width={24}
                                   height={24}
                                   className={`${isActive && 'brightness-200'}`}
                                 />
                                 {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className='flex-center cursor-pointer gap-2 p-4'>
                      <UserButton afterSignOutUrl='/' showName/>
                    </li>
                </ul>
        </nav>
      </div>
    </aside>
    </SignedIn> 
    <SignedOut>
     <div className='flex h-screen w-full items-center justify-center bg-white'>
        <SignIn />
      </div>
    </SignedOut>
    </>
  )
}

export default Sidebar
