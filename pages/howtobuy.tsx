import type { NextPage } from 'next'
import Seo from './components/Seo'
import Image from 'next/image'
import Header from './components/Header';


const Home: NextPage = () => {



  return (
    <>
      <div className="flex justify-center flex-col">
      <Header />
      <Seo
        pageTitle={'SJB_Hushimiinari'}
        pageDescription={'SJB_Hushimiinari'}
        pageImg={'https://sjb-hushimiinari.vercel.app/_next/image?url=%2Fmain_grap.png&w=3840&q=75'}
        pageImgWidth={1920}
        pageImgHeight={1005}
      />
        <Image className="min-w-full" src="/mint01.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint02.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint03.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint04.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint05.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint06.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint07.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint08.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint09.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint10.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint11.jpg" alt="Main Image" width={2000} height={1125}/>
        <Image className="min-w-full" src="/mint12.jpg" alt="Main Image" width={2000} height={1125}/>
        
      
      
    </div></>
  )
} 

export default Home
