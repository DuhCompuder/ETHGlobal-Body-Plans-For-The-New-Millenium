import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'
import Web3Modal from 'web3modal'

export const TransactionContext = React.createContext();

export const getEthereumContract = async () => {
    const web3 = new Web3Modal()
    const connection = await web3.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider, 
        signer,
        transactionContract
    })
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState(null)
   
    return (
      <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, getEthereumContract }}>
          {children}
      </TransactionContext.Provider>
  )
}