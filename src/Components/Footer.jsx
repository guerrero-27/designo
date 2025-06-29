import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-yellow-50 border-t border-orange-200 text-gray-700 text-sm select-none relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-7 gap-6">
        <div className="col-span-2 md:col-span-2 mb-4 md:mb-0">
          <div className="text-orange-500 font-bold mb-3 select-text">Designo</div>
          <p className="max-w-xs text-xs leading-relaxed">
            Create seamless digital experiences that bring happiness worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li className="hover:text-orange-500 cursor-pointer">Overview</li>
            <li className="hover:text-orange-500 cursor-pointer">Features</li>
            <li className="hover:text-orange-500 cursor-pointer">Solutions</li>
            <li className="hover:text-orange-500 cursor-pointer">Tutorials</li>
            <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
            <li className="hover:text-orange-500 cursor-pointer">Updates</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li className="hover:text-orange-500 cursor-pointer">About us</li>
            <li className="hover:text-orange-500 cursor-pointer">Careers <span className="text-xs text-white bg-orange-500 px-1 rounded ml-1">New</span></li>
            <li className="hover:text-orange-500 cursor-pointer">Press</li>
            <li className="hover:text-orange-500 cursor-pointer">Media kit</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer">Newsletter</li>
            <li className="hover:text-orange-500 cursor-pointer">Events</li>
            <li className="hover:text-orange-500 cursor-pointer">Help center</li>
            <li className="hover:text-orange-500 cursor-pointer">Tutorials</li>
            <li className="hover:text-orange-500 cursor-pointer">Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <ul className="space-y-1">
            <li className="hover:text-orange-500 cursor-pointer">Twitter</li>
            <li className="hover:text-orange-500 cursor-pointer">LinkedIn</li>
            <li className="hover:text-orange-500 cursor-pointer">Facebook</li>
            <li className="hover:text-orange-500 cursor-pointer">GitHub</li>
            <li className="hover:text-orange-500 cursor-pointer">AngelList</li>
            <li className="hover:text-orange-500 cursor-pointer">Dribbble</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li className="hover:text-orange-500 cursor-pointer">Terms</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy</li>
            <li className="hover:text-orange-500 cursor-pointer">Cookies</li>
            <li className="hover:text-orange-500 cursor-pointer">Licenses</li>
            <li className="hover:text-orange-500 cursor-pointer">Settings</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="bg-orange-500 text-white text-center py-4 rounded-b-lg text-xs select-text">
        © 2025 Kevin Guerrero. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer