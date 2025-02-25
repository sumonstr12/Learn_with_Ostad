

import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="bg-blue-300 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <a href="#" class="text-white text-lg font-bold">Logo</a>
                <div class="hidden md:flex space-x-4">
                    <a href="#" class="text-white">Home</a>
                    <a href="#" class="text-white">About</a>
                    <a href="#" class="text-white">Services</a>
                    <a href="#" class="text-white">Contact</a>
                </div>
                <button id="menu-btn" class="md:hidden text-white">☰</button>
            </div>
            <div id="menu" class="hidden md:hidden flex flex-col bg-blue-500 p-4">
                <a href="#" class="text-white py-1">Home</a>
                <a href="#" class="text-white py-1">About</a>
                <a href="#" class="text-white py-1">Services</a>
                <a href="#" class="text-white py-1">Contact</a>
            </div>
        </nav>

    </div>
  )
}

export default Navbar