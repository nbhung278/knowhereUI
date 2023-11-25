import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import InstagramLogo from '@/src/assets/images/instagram-logo.png'
import MetaLogo from '@/src/assets/images/meta-logo.png'
import GithubLogo from '@/src/assets/images/github-logo.png'
import DribbleLogo from '@/src/assets/images/dribble-logo.png'
import { SunIcon } from '../Icon'

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'>
      <Logo />
      <nav
        className='w-max py-3 px-8 border border-solid border-[2px] border-dark rounded-full font-medium capitalize flex items-center 
      gap-5 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'
      >
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className='hidden flex-row gap-4 items-center md:flex sm:hidden'>
        <Link href='/'>
          <Image
            src={InstagramLogo}
            alt='instagram logo'
            width={36}
            height={36}
            className='hover:scale-125 transition-all ease duration-200'
          />
        </Link>
        <Link href='/'>
          <Image
            src={MetaLogo}
            alt='instagram logo'
            width={36}
            height={36}
            className='hover:scale-125 transition-all ease duration-200'
          />
        </Link>
        <Link href='/'>
          <Image
            src={GithubLogo}
            alt='Github logo'
            width={26}
            height={26}
            className='hover:scale-125 transition-all ease duration-200'
          />
        </Link>
        <Link href='/'>
          <Image
            src={DribbleLogo}
            alt='Dribble logo'
            width={32}
            height={32}
            className='hover:scale-125 transition-all ease duration-200'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
