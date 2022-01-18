import { TransactionContext, TransactionProvider, getEthereumContract } from '../context/TransactionContext.js'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'
import Web3Modal from 'web3modal'

function Showcase() {
    const { connectWallet, connectedAccount } = useContext(TransactionContext)
    const [showcase, setShowCase] = useState([])
    const [supply, setSupply] = useState(null)
    useEffect(()=>{
        if(connectedAccount) {
            checkSupply()
            viewMinted()
        }
    },[supply, connectedAccount])
    const checkSupply = async () => {
        const contract = await getEthereumContract();
        const tx = await contract.totalSupply();
        const supply = Number(BigInt(tx))
        setSupply(supply)
        return supply
    }
    const mintNFT = async () => {
        if(!connectedAccount) alert('Connect your ethereum account first using the login button')
        const price = ethers.utils.parseUnits('0.001', 'ether')
        const transactionContract = await getEthereumContract();
        let transaction = await transactionContract.safeMint(1, { value: price })
        // let tx = await transactionContract.tokenURI(0);
        let tx = await transaction.wait()
        let event = tx.events[0]
        console.log("event emitted: ", event)
        let value = event.args[2]
        let tokenId = value.toNumber()
        console.log('Transaction: ',tokenId)
    }
    const Card = () => {
        return (
            <div className="border-2 border-white p-8 rounded-lg h-44 w-96">
                <div className="hover:animate-bounce hover:bg-red-500
                        inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">
                <button onClick={()=>mintNFT()} className='p-2 border border-white'><h1 className='text-white font-bold'>MINT</h1></button>
                </div>
            </div>
        )
    }
    const viewMinted = async () => {
        const contract = await getEthereumContract();
        const tx = await contract.totalSupply();
        const supply = Number(BigInt(tx))
        console.log("supply: ", Number(BigInt(tx)))
        const nftsToShow = [];
        if (supply < 5 && supply > 0) {
            for (let i=1; i<=supply; i++) {
                let found = await contract.tokenURI(supply-i)
                // console.log('found: ', found)
                let json = await axios.get(found)
                console.log('data: ', json)
                nftsToShow.push(json.data.image)
            }
        } else if (supply > 5) {
            for (let i=1; i<=5; i++) {
                let found = await contract.tokenURI(supply-i)
                let data = await axios.get(found)
                // console.log('data: ', data)
                nftsToShow.push(data.image)
            }
        }
        setShowCase(nftsToShow);
    }
    const displayCard = (link) => {
        console.log('link: ', link)
        return(
            <div>
                <img className='w-30 h-30 object-contain' src={link} alt='nft link' />
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center pt-10">
          <h1 className="font-bold text-white text-lg p-4">Showcase</h1>
            <div className="border-t-2 p-10 flex flex-col justify-center space-x-4">
                <h1></h1>
                <h1 className='text-white font-bold'>Const to mint: 0.001 Ether</h1>
                <Card />
                <h1 className='text-white font-bold'>Recent Mints</h1>
                <div className='flex space-x-2'>    
                    {showcase.length > 0 && showcase.map((link, key)=>(
                        <div key={key} className='w-auto h-auto'>
                            <img className='w-30 h-30 object-contain' src={link} alt='nft link' />
                        </div>
                    ))}
                    
                </div>
                <button className='p-2 border border-white'>
                    <a href="https://testnets.opensea.io/assets/0x9DFcB91CeC6Ce586F180C19B8DAFc1b876C5C524/0"><h1 className='text-white font-bold hover:cursor-pointer hover:text-blue-500'>Check them out on Opensea Click Here</h1></a>
                    </button>
            </div>
        </div>
    )
}

export default Showcase
