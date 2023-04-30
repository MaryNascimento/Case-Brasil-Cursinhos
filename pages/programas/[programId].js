import { FaCheckCircle } from "react-icons/fa"
import { FaCaretRight } from "react-icons/fa"

export const getStaticPaths = async() => {
    const response = await fetch('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs')
    const data = await response.json()
    const paths = data.map((program, index)=>{
        return{
            params: {
                programId: (index + 1).toString()
            },
        }

    })

    return {paths, fallback: false,}
}


export const getStaticProps= async(context)=> {

    const id = context.params.programId
    const data = await fetch(`https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs/${id}`)
    const content = await data.json()

    return {
        props: {
            conteudo: content,
        }
    }

}

export default function Program({conteudo}){
    return(
        <section className="bg-dark min-h-[90vh] text-ice border-b">
            <div className='flex items-center px-[10em] py-[2em] w-full bg-green gap-[15em]'>
                    <div className='mr-[15em]'>
                        <h2 key={conteudo.id} className="text-6xl font-bold tracking-tighter mb-[0.5em]">{conteudo.name}</h2>
                        <p key={conteudo.id} className="w-[22em]  text-xl tracking-tighter">{conteudo.description}</p>
                    </div>
                    <img key={conteudo.id} src={conteudo.image} alt="Imagem descritiva" className='rounded-[50%]'/>
            </div>
            <div className="text-ice flex flex-row gap-[2em] bg-dark py-[2.5em] px-[10em]">
                <span>
                    <div className="flex gap-[1em] text-green pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Objetivos</h3>
                    </div>
                    <p key={conteudo.id} className="pl-[3em] w-[23em]">{conteudo.objectives}</p>
                </span>
                <span>
                    <div className="flex gap-[1em] text-green pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Metas</h3>
                    </div>
                    <p key={conteudo.id} className="pl-[3em] w-[23em]">{conteudo.goals}</p>
                </span>
                <span>
                    <div className="flex gap-[1em] text-green pb-[1em]">
                        <span className="text-3xl"><FaCheckCircle/></span>
                        <h3 className="text-2xl font-black">Impacto</h3>
                    </div>
                    <p key={conteudo.id} className="pl-[3em] w-[23em]">{conteudo.impact}</p>
                </span>
            </div>
            <p className='tracking-tighter font-black text-2xl py-[0.8em] px-[6em] bg-green w-full'>Como Faço para Participar do Programa?</p>
            <div className="flex flex-col gap-[1em] px-[9em] py-[3em]">
                <span className="flex items-center gap-[0.5em]">
                    <span className="text-xl"><FaCaretRight/></span>
                    <p className="text-2xl font-bold">Torne-se um Voluntário do Bem Social!</p>
                </span>
                <p className="pl-[2em]">Basta entrar em contato pelo Email: bemsocial_contact@gmail</p>
                <span className="flex items-center gap-[0.5em]">
                    <span className="text-xl"><FaCaretRight/></span>
                    <p className="text-2xl font-bold">Ou Faça uma doação </p>
                </span>
                <p className="pl-[2em]">Pix: xxxxx-xxxx</p>
            </div>

        </section>
    )
}