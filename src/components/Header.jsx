import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBasket3 } from 'react-icons/bs';

function Header() {
    const sele = useSelector(store => store.products.products)
    console.log(sele);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-medium">My Online Store</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link to="/basket" className="relative text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <BsBasket3 />
                                <span className="w-3 h-3.5 absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white bg-red-600 rounded-full">{sele.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header