import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-start ml-[12rem]">
        <h1 className="font-bold text-[4.5rem] mt-[12.5rem] max-[102.4rem]:text-[4.3rem]">
          Olá, eu sou Carlos <br />
          Desenvolvedor Full-stack
        </h1>

        <span className="font-normal text-[1.8rem] mt-[2.5rem] max-[102.4rem]:text-[1.6rem]">
          Sou formado em Análise e Desenvolvimento de Sistemas pela UNINOVE, com
          5 anos de experiência como Desenvolvedor Full Stack, <br />
          tendo atuado no Itaú e em startups como a Próxima Casa. Fui Tech Lead
          no projeto SalveVet, liderando o back-end e decisões técnicas
          estratégicas. <br /> Tenho domínio prático de mais de 15 tecnologias,
          incluindo TypeScript, JavaScript, Node.js, Java, Python, seus
          principais frameworks, Docker, entre outras. <br /> Atualmente, curso
          especialização em Arquitetura de Software pela DNC, ampliando minha
          visão sistêmica. <br /> Apaixonado por tecnologia, busco sempre
          entregar soluções inteligentes, escaláveis e com impacto real.
        </span>

        <a
          href="/CV-CarloshpJacinto.pdf"
          download
          className="cursor-pointer text-[2rem] flex items-center justify-center mt-[4.5rem] w-[20.8rem] h-[4.7rem] font-medium text-white bg-green-kpp max-[102.4rem]:w-[18rem]"
        >
          Download CV
        </a>
      </header>

      <Card />
    </>
  );
}
