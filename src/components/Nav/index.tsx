/* eslint-disable @next/next/no-html-link-for-pages */
const Navbar = () => {
  return (
    <nav className="w-full flex justify-end text-[2rem] font-medium bg-green-kpp text-white pt-[2.5rem] pr-[10rem] pb-[2rem] max-[102.4rem]:pr-[5rem]">
      <a className="ml-20" href="/">
        Home
      </a>
      <a className="ml-20" href="/projects">
        Projetos
      </a>
      <a className="ml-20" href="/certificates">
        Certificados
      </a>
      <a className="ml-20" href="/contacts">
        Contato
      </a>
    </nav>
  );
};

export default Navbar;
