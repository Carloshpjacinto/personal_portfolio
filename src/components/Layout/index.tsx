import { Heebo } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../Nav";
import Footer from "../Footer";

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`ml-[20rem] mr-[10rem] mt-[2.5rem] ${heebo.className}`}>
      <Navbar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
