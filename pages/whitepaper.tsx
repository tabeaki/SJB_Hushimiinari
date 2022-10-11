import type { NextPage } from 'next'
import Seo from './components/Seo'
import Image from 'next/image'


const Home: NextPage = () => {



  return (
    <>
      <div className="flex justify-center">
      <Seo
        pageTitle={'SJB_Hushimiinari'}
        pageDescription={'SJB_Hushimiinari'}
        pageImg={'https://sjb-hushimiinari.vercel.app/_next/image?url=%2Fmain_grap.png&w=3840&q=75'}
        pageImgWidth={1920}
        pageImgHeight={1005}
      />
      <Image className="min-w-full" src="/0001.jpg" alt="Main Image" width={1241} height={11465}/>
    </div></>
  )
} 

export default Home
