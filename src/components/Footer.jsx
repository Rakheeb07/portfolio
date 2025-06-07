import { motion } from "framer-motion";
const Footer = () => {
    return (
      <footer className="border-t border-stone-900 bg-black py-6 text-center text-sm text-stone-400">
        <motion.p whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} className="mb-2">
          &copy; {new Date().getFullYear()} Abdul Rakheeb. All rights reserved.
        </motion.p>
      </footer>
    );
  };
  
  export default Footer;
  