import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import { ethers } from "ethers"
import Image from 'next/image'
import Seo from './components/Seo'
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast'

declare global {
  interface Window {
    ethereum: any;
  }
}

const abi = [
  "function totalSupply() public view virtual override returns (uint256)",
  "function mint() public payable ",
  "function is_paused() public view returns (bool)",
]
const contractAddress = "0xc324C8dA2aCEf319512Ccee42676B9Dc02E763D4"
const notify = () => toast('Starting to execute a transaction')

const Home: NextPage = () => {

  const [mintNum, setMintNum] = useState(0);
  const [paused, setpaused] = useState(false);
  const [getAccountFlag, setgetAccountFlag] = useState(false);

  useEffect(() => {
    const setSaleInfo = async() =>{
      const provider = new ethers.providers.Web3Provider((window as any).ethereum)    
      const accounts =  await provider.send("eth_requestAccounts", []);
      if(accounts[0] !== undefined){
        await setgetAccountFlag(true);
      }
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer);

      try{
        const mintNumber = (await contract.totalSupply() - 4);
        const paused = await contract.is_paused();
        setMintNum(mintNumber)
        setpaused(paused)  
      }catch(e){
        console.log(e)
      }
    }
    setSaleInfo();
    // add Network
    const addChain = async() => {
      try{
        await (window as any).ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: "0x1",
            chainName: 'Mainnet',
            nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 1,
            },
            rpcUrls: ['https://mainnet.infura.io/v3/20cd5bade2c0407da65c6811cc2a1b37'],
          }],
        })
        console.log("try");
      }catch(Exeption){
        console.log("Ethereum already Connected");
        console.log("catch");
      }finally{
        console.log("finally");
      }
    }
    //addChain();

  }, []);

  // ?????????????????????
  function MintButton() {

    const MetaMuskConnect = async () =>{
      const provider = new ethers.providers.Web3Provider((window as any).ethereum)
      const signer = provider.getSigner()
      const tokenPrice = "0.25";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try{
        await contract.mint({value: ethers.utils.parseEther(tokenPrice),gasLimit: 100000});
        toast('Starting to execute a transaction')
      }catch(err: any) {
        // JSON?????????
        let jsonData = JSON.stringify(err.reason);
        toast(jsonData);
      }

    };

    const ConnectWallet = async () =>{
      const provider = new ethers.providers.Web3Provider((window as any).ethereum)
      const accounts =  await provider.send("eth_requestAccounts", []);
      if(accounts[0] !== undefined){
        await setgetAccountFlag(true);
      }
    };
    
    return <>
    <div className="flex flex-wrap buttom justify-center bg-black bg-center bg-cover">
      <div className='px-2 py-16 lg:px-28 lg:py-28'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/v6WyHGK01QQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <div className="m-28 px-2 py-20 lg:px-20 lg:py-4 border-double border-8 rounded-md bg-black text-center bg-center bg-contain bg-no-repeat">
        <h3 className="text-xs lg:text-4xl text-white font-semibold "></h3>
        <h1 className="text-sm lg:text-2xl pt-1 text-white font-semibold ">PUBLIC MINT: Oct 10th</h1>
        <h1 className="text-sm lg:text-2xl pt-1 text-white font-semibold "></h1>
        <h1 className="text-base lg:text-5xl pt-1 pb-2 text-white font-semibold "> {mintNum} / 20</h1>
        <h3 className="sm:text-lg lg:text-3xl pt-1 text-white font-semibold ">Price 0.25 ETH</h3>  
        {/* ... */}
        {(!getAccountFlag) && <a href="#_" className="px-5 mt-4 mb-4 py-2.5 relative rounded group text-white font-medium inline-block">
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-orange-100 to-orange-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-orange-100 to-orange-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-100 to-orange-100"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-orange-200 from-orange-500"></span>
        <span className="relative" onClick={ConnectWallet}>Connect Wallet</span>
        <Toaster /></a>}
        {(getAccountFlag && !paused && mintNum <= 20) && <a href="#_" className="px-5 mt-4 mb-4 py-2.5 relative rounded group text-white font-medium inline-block">
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-orange-100 to-orange-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-orange-100 to-orange-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-100 to-orange-100"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-orange-200 from-orange-500"></span>
        <span className="relative" onClick={MetaMuskConnect}>NFT Mint</span>
        <Toaster /></a>}
        
        { (!paused && mintNum >= 20) && <h3 className="sm:text-lg lg:text-3xl pt-1 text-white font-semibold ">End of sale</h3>}
        <br/><a className="text-sm lg:text-2xl pt-1 text-white underline" href="https://opensea.io/ja/collection/torii-project" >market palace</a>
      </div>
      
    </div>
    </>
  }

  return (
    <>
      <div className="">
      <Header />
      <Seo
        pageTitle={'SJB_Hushimiinari'}
        pageDescription={'SJB_Hushimiinari'}
        pageImg={'https://sjb-hushimiinari.vercel.app/_next/image?url=%2Fmain_grap.png&w=3840&q=75'}
        pageImgWidth={1920}
        pageImgHeight={1005}
      />
      <Image className="min-w-full" src="/main_grap.png" alt="Main Image" width={1920} height={800}/>
      <MintButton />
    </div></>
  )
} 

export default Home
