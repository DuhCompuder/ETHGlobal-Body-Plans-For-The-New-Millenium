import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddressRinkeby, contractAddressLocalhost } from '../utils/constants'
import Web3Modal from 'web3modal'

const contractAddress = contractAddressRinkeby; //switch networks
export const TransactionContext = React.createContext();

export const getEthereumContract = async () => {
    const web3 = new Web3Modal()
    const connection = await web3.connect()
    const provider = new ethers.providers.Web3Provider(connection) // || new ethers.providers.JsonRpcProvider()
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    // console.log('provider info: ',{
    //     provider, 
    //     signer,
    //     transactionContract
    // })
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState(null)
   
    const checkIfWalletConnected = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask")
            console.log("check window ethereum: ", window.ethereum)
            const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    
            if (accounts.length) {
                setConnectedAccount(accounts[0]);
            } else {
                console.log('No accounts found')
            }
            console.log("Log accounts: ", accounts)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() =>{
        checkIfWalletConnected()
    },[connectedAccount])
    
    const connectWallet = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask")
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            setConnectedAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error('No ethereum object.')
        }
    }
    return (
      <TransactionContext.Provider value={{ connectWallet, connectedAccount, getEthereumContract }}>
          {children}
      </TransactionContext.Provider>
  )
}