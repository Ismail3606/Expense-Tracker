import  { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 rounded-xl">
      <div className="container mx-auto flex items-center justify-between">
        
        
        <div className="text-white text-2xl font-semibold">
          Expense Tracker
        </div>
        
      
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
          <a href="#home" className="block text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Home</a>
          <a href="#add-expense" className="block text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Add Expense</a>
          <a href="#history" className="block text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">History</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
