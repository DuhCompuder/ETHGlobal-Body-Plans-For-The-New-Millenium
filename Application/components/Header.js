import React, { useState, useEffect, useContext } from 'react'
import { TransactionContext, TransactionProvider, getEthereumContract } from '../context/TransactionContext'
import { ethers } from 'ethers'

function Header() {
    const { connectWallet, connectedAccount } = useContext(TransactionContext)
    const [isConnected, setIsConnected] = useState(false)
    return (
        <div className="w-full flex items-center p-2 relative">
            <div className="absolute top-0 left-0 w-4/12 flex space-x-5">
                <img className="w-5/12 border-r-4 border-white pt-6" src='newmillennium.jpeg' alt='new millennium' />
                <h1 className="font-bold text-white text-4xl">The Encrabment Series</h1>
            </div>
            <div className="w-full flex justify-end justif"> 
                <nav>
                    <h1 className={`p2 text-white ${connectedAccount?'':'hidden'}`}>{`Connected: ${connectedAccount?connectedAccount:''}`}</h1>
                    <button onClick={()=> connectWallet()} className={`border-2 p2 hover:cursor-pointer border-white py-3 px-5 ${connectedAccount?'hidden':''}`}><h1 className="text-white">Login</h1></button>
                </nav>
            </div>          
        </div>
    )
}

export default Header



