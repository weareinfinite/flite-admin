import React from 'react'
import { Link } from 'react-router-dom'
export default () => (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
    <div className="flex items-center flex-no-shrink text-white mr-6">
      
      <span className="font-semibold text-xl tracking-tight">Flite-Admin</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
     
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Login
        </Link>
        <Link to="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Dashboard
        </Link>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
          Settings
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Logout</a>
      </div>
    </div>
  </nav>
)