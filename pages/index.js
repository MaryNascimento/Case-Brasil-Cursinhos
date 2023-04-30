import { FaLaughSquint } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <section className="w-full">
      <div className="w-full min-h-[90vh] bg-[url('/images/background_imag.jpg')] bg-center bg-no-repeat brightness-50 absolute"></div>
      <div className="pt-[4em] flex flex-col justify-center items-center w-full text-ice relative">
        <h1 className="text-8xl tracking-tighter uppercase">Seja Bem-Vindo!</h1>
        <div className="w-[20em] py-[1.5em] flex justify-center items-center text-5xl">
          <span className="mr-[0.5em]"><FaLaughSquint/></span>
          <FaHeart/>
        </div>
        <p className="text-2xl w-[30em] tracking-tighter text-center border-y py-[2em]">Faça parte de uma causa pela <strong className="text-lightgreen">dignidade</strong> de pessoas em situação de <strong className="text-lightgreen">vulnerabilidade social</strong>, conheça nossos programas e ajude na luta por um mundo melhor.</p>
      </div>
    </section>
  )
}
