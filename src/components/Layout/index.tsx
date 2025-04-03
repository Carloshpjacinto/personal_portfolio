import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="w-full flex justify-end mt-10">
        <a className="me-10 text-4xl" href="">
          Projetos
        </a>
        <a className="me-10 text-4xl" href="">
          Blog
        </a>
        <a className="me-10 text-4xl" href="">
          Contato
        </a>
      </nav>
      <main className="w-full flex justify-center align-middle">
        {children}
      </main>
      <footer className="w-full flex justify-center py-6 bg-snow-white border-t border-t-light-grey-500">
        © 2024 Escola DNC, Inc.
      </footer>
    </>
  );
};

export default Layout;
