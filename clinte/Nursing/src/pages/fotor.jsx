function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 shadow-inner mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; 2025 <span className="font-semibold text-white">Bharat Vibrant</span>. All rights reserved.
            </p>
          </div>
  
          {/* Right Section */}
          <ul className="flex gap-8 text-gray-400">
            <li className="hover:text-white hover:underline transition cursor-pointer">Privacy</li>
            <li className="hover:text-white hover:underline transition cursor-pointer">Terms</li>
            <li className="hover:text-white hover:underline transition cursor-pointer">Contact</li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  