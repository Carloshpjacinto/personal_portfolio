import { artigos } from "@/resource/artigos";

const Card = () => {
  return (
    <section className="w-full h-[39.6rem] mt-[10rem] bg-gray-200 m-0 pt-[5rem] pl-[8rem] max-[102.4rem]:pl-[1rem] max-[102.4rem]:pr-[1rem]">
      <div className="flex flex-row justify-between">
        {artigos.map((artigo) => (
          <a key={artigo.id} href={artigo.link}>
            <div className="bg-white w-[41.8rem] h-[29.5rem] p-[3.5rem] rounded-[5rem] mr-[10rem] flex flex-col justify-between max-[102.4rem]:mr-[3rem] max-[102.4rem]:ml-[2rem] max-[102.4rem]:w-[40rem]">
              <h1 className="text-[2.6rem] font-bold mb-[1.5rem] text-green-kpp max-[102.4rem]:text-[2.2rem]">
                {artigo.titulo}
              </h1>
              <div>
                <span className="text-[1.8rem] font-normal] max-[102.4rem]:text-[1.5rem]">
                  {artigo.data}
                </span>
                <span className="text-[1.8rem] font-normal ml-[2.5rem] text-green-kpp max-[102.4rem]:text-[1.5rem]">
                  {artigo.assunto}
                </span>
              </div>
              <h3 className="text-[1.6rem] font-normal mt-[1rem] max-[102.4rem]:text-[1.6rem]">
                {artigo.artigo}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Card;
