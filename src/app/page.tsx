export default function Home() {
  return (
    <>
      <header className="flex flex-col items-start justify-start">
        <h1 className="font-bold text-[4.4rem] mt-[12.5rem]">
          Olá, eu sou Carlos <br />
          Desenvolvedor Full-stack
        </h1>

        <span className="font-normal text-[1.6rem] mt-[2.5rem]">
          Sou formado em Análise e Desenvolvimento de Sistemas pela UNINOVE, com
          5 anos de experiência como Desenvolvedor Full Stack, tendo atuado no
          Itaú e em startups como a Próxima Casa. <br /> Fui Tech Lead no
          projeto SalveVet, liderando o back-end e decisões técnicas
          estratégicas. <br /> Tenho domínio prático de mais de 15 tecnologias,
          incluindo TypeScript, JavaScript, Node.js, Java, Python, seus
          principais frameworks, Docker, entre outras. <br /> Atualmente, curso
          especialização em Arquitetura de Software pela DNC, ampliando minha
          visão sistêmica. <br /> Apaixonado por tecnologia, busco sempre
          entregar soluções inteligentes, escaláveis e com impacto real.
        </span>

        <button className="cursor-pointer text-[2rem] mt-[4rem] w-[20.8rem] h-[4.7rem] font-medium text-white bg-green-kpp">
          Download CV
        </button>
      </header>

      <section className="absolut w-[100vw] h-[39.6rem] mt-[10rem] bg-gray-200 m-0 ml-[-20rem] p-[15rem]">
        <h1>Blog</h1>
      </section>
    </>
  );
}
