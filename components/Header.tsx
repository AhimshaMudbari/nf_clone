import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
       const handleScroll =()=>{
           if(window.scrollY> 0){
            setScrolled(true)
           }
           else{
               setScrolled(false)
           }
       }
       window.addEventListener('scroll',handleScroll)
       return ()=>{
           window.removeEventListener('scroll', handleScroll)
       }
    }, [])
 return (
<header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
        <img className="cursor-pointer object-contain p-2" src="https://rb.gy/ulxxee" height={100} width={100} alt=""/>
    <ul className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">TV Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">Popular</li>
        <li className="headerLink">My list</li>
    </ul>
    </div>
    <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon  className='hidden sm:inline h-6 w-6'/>
        <p className='hidden lg:inline'> Kids</p>
        <BellIcon className=' h-6 w-6'/>
        <Link href="/account">
            <img src="https://rb.gy/g1pwyx" alt="" 
            className='cursor-pointer rounded'/>
        </Link>
    </div>
</header>  )
}

export default Header