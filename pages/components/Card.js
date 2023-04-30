import Link from 'next/link'

export default function Card({nome, descrição, imagem, programa}){
    return(
        <div className="text-center w-[15em] h-[27em] bg-ice text-gray rounded-[2em]">
            <div className="h-[15em] rounded-t-[2em]">
                <img src={imagem} alt="Imagem descritiva" className='rounded-t-[2em] w-[100%] h-[100%]'/>
            </div>
            <div className="h-[145px] px-[1em] pt-[0.5em] pb-[1.3em]">
                <h3 className="font-black text-lg mb-[0.5em]">{nome}</h3>
                <p className="text-sm">{descrição}</p>
            </div>
            <Link href={`/programas/${programa}`} className='text-lg bg-green text-ice py-[0.5em] px-[1em] rounded-[0.5em] hover:bg-blue'>Saiba Mais</Link>
        </div>
    )
}