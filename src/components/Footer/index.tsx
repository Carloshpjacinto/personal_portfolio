import Image from "next/image";
import fb from "@/assets/fb.svg";
import group from "@/assets/Group.svg";
import insta from "@/assets/insta.svg";
import linkedin from "@/assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="w-full flex font-normal py-10 flex-col items-center text-[1.4rem] text-default mt-[10rem]">
      <div className="flex flex-row gap-[5rem] mb-[2.5rem]">
        <a href="http://">
          <Image className="stroke-green-kpp" src={fb} alt="assets-facebook" />
        </a>
        <a href="http://">
          <Image src={insta} alt="assets-instagram" />
        </a>
        <a href="http://">
          <Image src={group} alt="assets-x" />
        </a>
        <a href="http://">
          <Image src={linkedin} alt="assets-linkedin" />
        </a>
      </div>
      Copyright ©2030 All rights reserved
    </footer>
  );
};

export default Footer;
