import React from 'react';
import { IoIosArrowRoundForward, IoIosPhonePortrait } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import img from '../../public/Picture_005-removebg-preview.png'
import './banner.css'
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <div id='Home' className='py-4 px-2 md:flex justify-around'>
                <div className='my-16'>
                    <h2 className='uppercase md:text-3xl text-2xl mb-4 font-bold' data-aos="fade-down" data-aos-duration="1000">My name
                        is</h2>
                    <h2 className='webkit uppercase font-bold text-5xl' data-aos="fade-left" data-aos-duration="1500">Badhon Barmon</h2>
                    <h3 className='font-semibold text-2xl my-4' data-aos="fade-right" data-aos-duration="1500">
                        <TypeAnimation
                            sequence={[
                                `I'm a Mern Stack Developer`,
                                2000,
                                `I'm a Full Stack Developer`,
                                2000,
                                `I'm a React Developer`,
                                2000,
                                `I'm a Frontend Developer`,
                                2000,
                            ]}
                            speed={50}
                            style={{ fontSize: '' }}
                            repeat={Infinity}
                        />
                    </h3>
                    <button className='bg-gradient-to-r from-[#af2676] to-[#441b45] flex gap-2 p-[12px] my-8 px-8 font-semibold' data-aos="fade-left" data-aos-duration="1500"><a className='flex items-center' href="#Contact">Work with ME <IoIosArrowRoundForward className='-rotate-45 text-2xl' /></a> </button>
                    <div className='md:flex gap-8' data-aos="fade-up" data-aos-duration="1500">
                        <h2 className='flex gap-2 my-4 items-center text-xl'><IoIosPhonePortrait className='text-2xl' />+8801831591975</h2>
                        <h3 className='flex gap-2 items-center text-xl'><IoMail />badhonraj024@gmail.com</h3>
                    </div>
                </div>
                <div className='flex'>
                    <img className='h-[500px] mb-16' data-aos="zoom-in-up" data-aos-duration="1500" src={img} alt="" />
                </div>
            </div>
            <div>
                <About></About>
                <Services></Services>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </div>
        </div>

    );
};

export default Home;