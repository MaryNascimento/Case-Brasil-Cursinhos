import { FaFacebook } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer () {
    return (
        <footer className="h-[13em] flex flex-col justify-center items-center bg-dark text-ice">
            <ul className="flex mb-[1em]">
                <li className="mr-[1.3em] text-2xl cursor-pointer hover:text-lightgreen"><FaFacebook/></li>
                <li className="mr-[1.3em] text-2xl cursor-pointer hover:text-lightgreen"><FaInstagram/></li>
                <li className="text-2xl cursor-pointer hover:text-lightgreen"><FaLinkedin/></li>
            </ul>
            <p className="mb-[1em]">Email: bemsocial_contact@gmail.com</p>
            <p><strong>ONG BemSocial</strong> &copy; 2023</p>
        </footer>
    )

}