import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { childrenVariant, parentVariant } from "../components/Hero.jsx";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-[#654025] text-[#cbad89] py-8 lg:grid grid-cols-2 justify-around mx-auto lg:gap-[10%]">
      <div className="m-auto lg:ml-[40%]">
        <h1 className="text-4xl lg:text-6xl ">Anand Fashions</h1>
        <h3 className="text-2xl lg:text-4xl my-5">
          Your unique style, our artistic touch.
        </h3>
      </div>
      {/* <hr className=""/> */}
      <motion.div
        className="flex lg:grid grid-cols-2 lg:gap-6 text-6xl lg:w-[45%] lg:text-8xl gap-8 mt-8 items-center justify-center"
        variants={parentVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {socialLinks.map((links, i) => {
          return (
            <>
              <motion.div key={i} variants={childrenVariant} className="">
                <motion.a href={links.href}>{links.icon}</motion.a>
              </motion.div>
            </>
          );
        })}
      </motion.div>
    </footer>
  );
};

export default Footer;
