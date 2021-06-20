import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonPlus } from 'react-icons/bs';
import { BiPalette } from 'react-icons/bi';
import { BiLogIn } from 'react-icons/bi';
 
const Header = () => (
    <nav className='navbar navbar-dark bg-primary fixed-top'>
        <div className='container'>
            <Link className='btn btn-primary btn-sm mb-3' to='/registrasi' style={{ marginLeft: '0px', marginTop: '10px' }}>
                Registrasi <BsPersonPlus /></Link>
            <Link className='navbar-brand' to='/' style={{ marginLeft: '200px'}}><BiPalette />Kunci Wisata</Link>  
            <Link className='btn btn-primary btn-sm mb-3' to='/login' style={{ marginLeft: '200px', marginTop: '10px' }}>Login <BiLogIn /> </Link>
            
        </div>
    </nav>
)
 
export default Header