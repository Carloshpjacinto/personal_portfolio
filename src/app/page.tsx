export default function Home() {
  return (
    <header className="flex flex-col items-start justify-start">
      <h1 className="font-bold text-[4.4rem]">
        Olá, eu sou Carlos <br />
        Desenvolvedor Full-stack
      </h1>

      <span className="font-normal text-[1.6rem]">
        Sou formado em Análise e Desenvolvimento de Sistemas pela UNINOVE, com 2
        anos de experiência como Desenvolvedor Full Stack no Itaú Unibanco.{" "}
        <br /> Fui Tech Lead no projeto SalveVet, liderando o back-end e
        decisões técnicas estratégicas. <br /> Tenho domínio prático de mais de
        15 tecnologias, incluindo TypeScript, JavaScript, Node.js, Java, Python,
        seus principais frameworks, Docker, entre outras. <br /> Atualmente,
        curso especialização em Arquitetura de Software pela DNC, ampliando
        minha visão sistêmica. <br /> Apaixonado por tecnologia, busco sempre
        entregar soluções inteligentes, escaláveis e com impacto real.
      </span>
      <button>Download CV</button>
    </header>
  );
}
