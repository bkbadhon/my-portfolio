import React from 'react';
import { FaLocationDot} from 'react-icons/fa6';
import { IoIosPhonePortrait, IoMdContact } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import img from '../../public/BK Design.png'
import { MdOutlineFileDownload } from 'react-icons/md';

const About = () => {
    return (
        <div id='About' className='w-11/12 mx-auto'>
        <h2 className='italic md:text-2xl tetx-xl font-bold' data-aos="fade-right" data-aos-duration="1800">Nice to meet you!</h2>
        <h1 className='md:text-5xl text-3xl font-bold' data-aos="fade-right" data-aos-duration="1800">ABOUT ME</h1>

        <div className='my-20 md:flex gap-8 justify-between items-center'>
            <div className='md:w-1/2'>
                <img className='w-[400px]' data-aos="zoom-in-up" data-aos-duration="2000" src={img} alt="" />
                <h2 className='uppercase text-5xl bg-gradient-to-r from-[#af2676] to-[#441b45] bg-clip-text text-transparent my-4 font-bold' data-aos="fade-right" data-aos-duration="1000">Badhon Barmon</h2>
                <h3 className='font-semibold text-3xl my-4' data-aos="fade-right" data-aos-duration="1500">Mern Stack Developer <span className='font-thin'>based in </span>Bangladesh</h3>
                <button className='bg-gradient-to-r from-[#af2676] to-[#441b45] hover:bg-[#af2676] duration-500 flex gap-2 p-[12px] my-8 px-8 font-semibold' data-aos="fade-up" data-aos-duration="1500"><a className='flex items-center' >Download CV <MdOutlineFileDownload className='text-2xl' /></a></button>
            </div>
            <div className='md:w-1/2'>
                <h2 data-aos="fade-right" data-aos-duration="1000">I am a skilled MERN stack developer, born in 2002 in Pirganj, Rangpur, Bangladesh. I specialize in developing single-page applications and implementing both front-end and back-end solutions. With a passion for continuous improvement, I am dedicated to exploring new technologies and refining my skills to produce cleaner, more efficient code. I am committed to pursuing innovative solutions that align with my interests, ensuring the delivery of high-quality results for every project I take on.

                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 my-8' data-aos="fade-down" data-aos-duration="1500">
                    <h2 className='flex gap-2 font-bold items-center text-xl'><IoIosPhonePortrait />+8801831591975</h2>
                    <h2 className='flex gap-2 font-bold items-center text-xl'><IoMdContact />Badhon Barmon</h2>
                    <h3 className='flex gap-2 font-bold items-center text-xl'><IoMail/>badhonraj024@gmail.com</h3>
                    <h3 className='flex gap-2 font-bold items-center text-xl'><FaLocationDot />Rangpur, Bangladesh</h3>
                </div>
                <div className="divider divider-secondary" data-aos="fade-right" data-aos-duration="1500"></div>

                <div>
                    <div className='md:flex justify-between'>
                        <div className='' data-aos="fade-down" data-aos-duration="1500">
                            <div className='flex gap-2 items-center my-4'>
                                <h2 className='text-4xl font-bold text-[#9c3e9e]'>2+</h2>
                                <h2 className='font-bold text-2xl'>Years <br />
                                    experience...</h2>
                            </div>
                            <h3 data-aos="fade-right" data-aos-duration="1500">Hello there! My name is <span className='text-[#9c3e9e]'>Badhon Raj</span>. I <br /> am a Mern Stack Developer, and Im <br /> very passionate and dedicated to my <br /> work.</h3>
                        </div>
                        <div className='' data-aos="fade-down" data-aos-duration="1500">
                            <div className='flex gap-2 items-center my-4'>
                                <h2 className='text-4xl font-bold text-[#9c3e9e]'>20+</h2>
                                <h2 className='font-bold text-2xl'>Clients <br />
                                    Worldwide...</h2>
                            </div>
                            <h3 data-aos="fade-right" data-aos-duration="1500">With 2+ years experience as a <br /> professional developer, I have acquired <br /> the skills to make your project a <br /> success.</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='py-16 p-4 md:flex justify-between items-center bg-gradient-to-r from-[#af2676] to-[#441b45]'>
            <div className='md:w-2/5' data-aos="fade-up" data-aos-duration="2000">
                <p className='italic font-bold text-xl my-4'>Experience</p>
                <h2 className='md:text-5xl text-3xl font-bold my-8 uppercase'>My Experience</h2>
                <p>Hello there! My name is Badhon Barmon. I am a <br /> Mern Stack Developer and I'm very <br /> passionate and dedicated to my work.</p>
                <button className='bg-black hover:bg-white hover:text-black duration-500 flex gap-2 p-[12px] my-8 px-8 font-semibold'><a className='flex items-center'>Download my resume <MdOutlineFileDownload className='text-2xl' /></a></button>
            </div>
            <div className='md:w-3/5' data-aos="fade-up" data-aos-duration="3000">
                <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                    <h2 className='text-xl font-bold'>-2023 - Present</h2>
                    <h2 className='text-xl font-bold'>- Mern Stack Developer</h2>
                </div>
                <h3 className='md:text-4xl text-3xl border-b-2 border-x-gray-100 py-8 mb-8 font-extrabold'>Mern Stack Developer</h3>
                <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                    <h2 className='text-xl font-bold'>-2022 - 2023</h2>
                    <h2 className='text-xl font-bold'>-Frontend Developer</h2>
                </div>
                <h3 className='md:text-4xl text-3xl border-b-2 border-x-gray-100 py-8 mb-8 font-extrabold'>Frontend Developer</h3>
                <div className='md:flex gap-32 mb-4 justify-between mr-8'>
                    <h2 className='text-xl font-bold'>-2021 - 2024</h2>
                    <h2 className='text-xl font-bold'>-Jr. Frontend Developer</h2>
                </div>
                <h3 className='md:text-4xl text-3xl font-extrabold'>Jr. Frontend Developer</h3>
            </div>
        </div>
    </div>
    );
};

export default About;