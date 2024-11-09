import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../public/badhon.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
function App() {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="flex">
        <nav className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-64 text-white shadow-lg z-50 justify-between">
          <div className="p-4">
              <a href="/" className='flex items-center'>
              <img className='w-20' src={logo} alt="" />
              <h2 className='text-3xl font-semibold'>Badhon</h2>
              </a>
            <ul className="mt-40 space-y-4">
              <li><a href="#Home" className="block font-semibold hover:text-pink-500">HOME</a></li>
              <li><a href="#About" className="block font-semibold hover:text-pink-500">ABOUT</a></li>
              <li><a href="#Services" className="block font-semibold hover:text-pink-500">SERVICES</a></li>
              <li><a href="#Portfolio" className="block font-semibold hover:text-pink-500">PORTFOLIO</a></li>
              <li><a href="#Contact" className="block font-semibold hover:text-pink-500">CONTACT</a></li>
            </ul>
          </div>
          <div className="flex mb-8 mx-4 gap-4">
            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
          </div>
        </nav>

        <div className={`fixed inset-y-0 left-0 w-38 bg-black text-white transition-transform duration-300 transform ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50 flex flex-col justify-between`}>
          <div className="flex justify-between p-4">
          <a href="/" className='flex items-center'>
              <img className='w-20' src={logo} alt="" />
              <h2 className='text-3xl font-semibold'>Badhon</h2>
              </a>
            <button onClick={toggleNavbar} className="text-white">
              <AiOutlineClose size={24} />
            </button>
          </div>
          <ul className="mt-12 space-y-4 px-4">
            <li><a href="#Home" className="block font-semibold hover:text-pink-500">HOME</a></li>
            <li><a href="#About" className="block font-semibold hover:text-pink-500">ABOUT</a></li>
            <li><a href="#Services" className="block font-semibold hover:text-pink-500">SERVICES</a></li>
            <li><a href="#Portfolio" className="block font-semibold hover:text-pink-500">PORTFOLIO</a></li>
            <li><a href="#Contact" className="block font-semibold hover:text-pink-500">CONTACT</a></li>
          </ul>
          <div className="flex mb-8 px-4 gap-4">
            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
          </div>
        </div>

        <button
          className="fixed text-2xl top-0 left-2 z-25 p-2 rounded md:hidden"
          onClick={toggleNavbar}
        >
          {isNavVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <div className={`flex-1 transition-all duration-300 ${isNavVisible ? 'ml-38' : 'ml-0'} md:ml-0 lg:ml-64 overflow-hidden`}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
