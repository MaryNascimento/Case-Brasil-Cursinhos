import Link from 'next/link'
import Image from 'next/Image'

export default function Navbar () {
    return(
        <nav className="mx-auto flex justify-between items-center py-[0.5em] px-[8em] bg-dark">
            <Image src="/images/logo.png" width="230" height="50" alt='Logo da Ong Bem Social'></Image>
            <ul className="flex text-ice gap-[3em]">
                <li className='hover:text-lightgreen'><Link href="/">Home</Link></li>
                <li className='hover:text-lightgreen'><Link href="/programas">Programas Sociais</Link></li>
                <li className='hover:text-lightgreen'><Link href="/sobre">Sobre Nós</Link></li>
            </ul>

        </nav>
    )

}