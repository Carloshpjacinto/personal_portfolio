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
    <div className={heebo.className}>
      <Navbar />
      <main className="w-full flex justify-center align-middle">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
