import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
//Iconos
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

//Se recibe el prop de busqueda y usuario
const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  
    const navigate = useNavigate();
  
    //Se mostrará el navbar sólo si el usuario existe
    if(!user) return null;
    
    return (
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
            <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
                <IoMdSearch fontSize={21} className="ml-1" />
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    value={searchTerm}
                    onFocus={() => navigate('/search')}
                    className="p-2 w-full bg-white outline-none"
                />
            </div>

            <div className='flex gap-3'>
                {/* Se tiene que linkear el usuario */}
                <Link to={'user-profile/${user?._id}'}>
                    {/*Se muestra la imagen del usuario */}
                    <img src={user.image} alt="user" className='w-14 h-12 rounded-lg'/>
                </Link>
                
                {/*Icono para crear pin*/}
                <Link to='create-pin' className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:12 flex justify-center items-center">
                    <IoMdAdd/>
                </Link>
            </div>
    </div>
  )
}

export default Navbar