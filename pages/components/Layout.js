import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout ({children}){
    return (
        <>
        <Navbar/>
        <main className="min-h-[90vh]">{children}</main>
        <Footer/>
        </>
    )
}