import logo from "../src/assets/logo-text.png"

const Footer = () => {
    return (
        <div>
          <footer className="mt-20 bg-white text-gray-500 font-sans text-sm border border-t-gray-300">
  <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
  
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
     
      <div className="md:col-span-5 space-y-5">
        <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        </div>

        <p className="text-gray-500 leading-relaxed max-w-sm">
          Curated tools, technologies, and resources for developers building modern software.
        </p>

        <div className="flex items-center gap-5 pt-2">
          <a href="#" className="font-semibold text-gray-800 hover:text-[#E11D48] transition-colors">
            GitHub
          </a>
          <a href="#" className="font-semibold text-gray-800 hover:text-[#E11D48] transition-colors">
            Twitter
          </a>
          <a href="#" className="font-semibold text-gray-800 hover:text-[#E11D48] transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

   
      <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Product
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </div>

     
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Company
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Legal
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

   
    <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
      <p>© 2026 Dev Stack. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-600 transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Terms
        </a>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;