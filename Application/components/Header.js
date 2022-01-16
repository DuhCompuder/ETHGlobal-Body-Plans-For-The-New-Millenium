import { useState } from "react";

function Header() {

    return (
        <div className="w-full flex items-center p-2 relative">
            <div className="absolute top-0 left-0 w-4/12 flex space-x-5">
                <img className="w-5/12 border-r-4 border-white pt-6" src='newmillennium.jpeg' alt='new millennium' />
                <h1 className="font-bold text-white text-4xl">The Encrabment Series</h1>
            </div>
            <div className="w-full flex justify-end justif"> 
                <nav className="">
                    <button className="hover:cursor-pointer border-2 border-white py-3 px-5"><h1 className="text-white">Login</h1></button>
                </nav>
            </div>          
        </div>
    )
}

export default Header



