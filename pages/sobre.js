import Image from 'next/Image'
import { FaCheckCircle } from "react-icons/fa"

export default function Sobre(){

    return(
        <section className="min-h-[90vh] bg-dark text-ice border-b">
            <div className='flex justify-center items-center px-[10em] py-[5em] w-full bg-gray px-[10em]'>
                <div className='mr-[15em]'>
                    <h2 className=" text-7xl tracking-tighter mb-[0.5em] ">Sobre Nós</h2>
                    <p className="w-[21em] text-2xl tracking-tighter">Conheça mais sobre nossa história e nossa missão com a sociedade</p>
                </div>
                <Image src="/images/figure-2.svg" width="350" height="200" alt='Figura ilustrativa'></Image>
            </div>

            <h3 className='tracking-tighter font-black text-3xl py-[0.3em] px-[7em] bg-green w-full'>Como tudo começou?</h3>
            <p className='bg-dark py-[2em] px-[12em] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3 className='tracking-tighter font-black text-3xl py-[0.3em] px-[7em] bg-green w-full'>Missão, Visão e Valores</h3>
            <div className='flex flex-col gap-[3em] py-[3em] px-[13em]'>
                <span>
                    <div className="flex gap-[1em] pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Missão</h3>
                    </div>
                    <p className="pl-[3em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </span>
                <span>
                    <div className="flex gap-[1em] pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Visão</h3>
                    </div>
                    <p className="pl-[3em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </span>
                <span>
                    <div className="flex gap-[1em] pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Valores</h3>
                    </div>
                    <p className="pl-[3em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </span>
            </div>

        </section>
    )

}