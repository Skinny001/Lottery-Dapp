const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-400 text-sm py-6 border-t border-white/10 mt-10">
      &copy; {new Date().getFullYear()} Lottery DApp. Built for Web3.
    </footer>
  );
};

export default Footer;