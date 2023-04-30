import Card from '../components/Card'
import Image from 'next/Image'
import Paragrafo from '../components/Paragrafo'

export async function getStaticProps(){
    const data = await fetch('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs')
    const programs = await data.json()

    return {
        props: {programs}
    }

}

export default function Programas ({programs}){

    
    return(
        <section className="flex flex-col text-ice min-h-[90vh]">
            <div className='flex items-center px-[10em] py-[5em] w-full bg-gray'>
                <div className='mr-[15em]'>
                    <h2 className="text-7xl tracking-tighter mb-[0.5em]">Programas Sociais</h2>
                    <p className="w-[21em]  text-2xl tracking-tighter">Ajude a ONG participando de nossos programas e <span className="text-lightgreen">faça diferença</span> na vida de alguém.</p>
                </div>
                <Image src="/images/figure.svg" width="350" height="200" alt='Figura ilustrativa'></Image>
            </div>

            <h3 className='tracking-tighter font-black text-3xl py-[0.8em] px-[5em] bg-green w-full'>Porque fazer Parte de uma ação social?</h3>
            <div className='flex flex-row gap-[2em] bg-dark py-[2.5em] px-[10em]'>     
                <Paragrafo/>
                <Paragrafo/>
                <Paragrafo/>
            </div>

            <div className='flex flex-row flex-wrap  gap-[4em] px-[11.4em] py-[3em] bg-gray'>
                {programs.map((program) => (
                    <div key={program.id}><Card nome={program.name} descrição={program.description} imagem={program.image} programa={program.id}/></div>
                ))
                }
            </div>
        </section>
    )
}