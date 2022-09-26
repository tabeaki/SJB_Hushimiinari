/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image'

 function Header() {
     return <header>
            <nav className="max-w-full bg-black">
                <div className="grid grid-rows-12 grid-flow-col gap-4">
                <div className="col-span-8 text-slate-100 font-medium">
                {/*  <Image className="" src="" alt="chara1" width={150} height={50} objectFit="contain"/> */}
                </div>
                <div className='justify-end flex'>
                    <div className="px-2 text-center text-sm lg:text-2xl pt-3 text-white font-semibold "><a  href="/"></a></div>
                    <div className="bg-[url('/twiter_icon.png')] px-4 pt-7 text-center bg-center bg-no-repeat bg-cover"><a className="px-2 py-4" href="https://twitter.com/SJB_art_work"></a></div>
                    <div className="bg-[url('/discode_icon.png')] px-2 pt-7 mr-4 text-center bg-center bg-no-repeat bg-cover"><a className="px-2 py-4" href="https://discord.gg/dTCSt8FxsC"></a></div>
                </div>
                </div>
            </nav>
        </header>;
   }

   export default Header;