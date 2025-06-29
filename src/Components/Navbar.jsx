import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30  overflow-x-hidden">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-orange-500 font-bold text-xl select-none">Designo</div>
          <ul className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
            <li className="hover:text-green-500 cursor-pointer">Solutions</li>
            <li className="hover:text-green-500 cursor-pointer">Tools</li>
            <li className="hover:text-green-500 cursor-pointer">Pricing</li>
            <li className="hover:text-green-500 cursor-pointer">Company</li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center">
          <button className="text-gray-700 hover:text-green-500 text-sm font-semibold">EN</button>
          <button className="px-4 py-1 rounded-md bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar