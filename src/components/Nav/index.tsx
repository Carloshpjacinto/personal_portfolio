const Navbar = () => {
  return (
    <nav className="w-full flex justify-end text-[2rem] font-medium text-black">
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
