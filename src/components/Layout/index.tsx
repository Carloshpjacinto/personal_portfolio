
import { ReactNode } from "react";
import Navbar from "../Nav";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="ml-[0rem] mr-[0rem] mt-[2.5rem] text-default">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
