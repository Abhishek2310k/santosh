import React from 'react'
import './Navbar.scss'
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return ( 
    <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Santosh</motion.span>
            <div className='social'>
                <a href='https://github.com/santosh451'><img src='/github.png' alt='/'/></a>
                <a href='www.linkedin.com/in/santosh-kumar-prajapat'><img src='/linkedin.png' alt='/'/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar