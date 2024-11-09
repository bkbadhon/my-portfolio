import img1 from '../../public/19199025.jpg'
import img2 from '../../public/7034478.jpg'
import img3 from '../../public/backend_1.jpg'
import img4 from '../../public/frontend_text_2.jpg'
const Services = () => {
    return (
        <div id='Services' className='w-11/12 my-16 mx-auto'>

            <h2 className='italic font-bold p-2' data-aos="fade-up" data-aos-duration="1500">My Service</h2>
            <h2 className='md:text-5xl text-3xl uppercase font-bold' data-aos="fade-up" data-aos-duration="1500">My Specialties</h2>

            <div className='my-8'>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="1500">
                    <input type="radio" name="my-accordion-3" />
                    <div className='md:flex collapse-title justify-between'>
                        <h2 className='text-3xl text-[#642165] uppercase font-bold'>Frontend Developer</h2>
                        <div className=" text-lg">What is Frontend React Developer ? </div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8" data-aos="fade-up" data-aos-duration="2000">
                        <img className='w-80 h-48' data-aos="zoom-in-up" data-aos-duration="1500" src={img4} alt="" />
                        <div className='' data-aos="fade-right" data-aos-duration="1500">
                            <h2 className='text-2xl font-bold mb-4'>Frontend Developer</h2>
                            <p>A frontend React developer builds interactive, user-facing parts of web applications using React. They create reusable components, manage state, integrate APIs, and ensure responsive design for a seamless user experience. Proficient in JavaScript, HTML, CSS, and tools like Redux, they also handle performance optimization, testing, and debugging, making them essential for delivering high-quality, dynamic web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="2500">
                    <input type="radio" name="my-accordion-3" />
                    <div className='md:flex collapse-title justify-between'>
                        <h2 className='text-3xl text-[#642165] uppercase font-bold'>Mern Stack Developer</h2>
                        <div className=" text-lg">What is Mern Stack Developer ? </div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80 h-48' src={img2} alt="" />
                        <div className=''>
                            <h2 className='text-2xl font-bold mb-4'>Mern Stack Developer</h2>
                            <p>A MERN stack developer specializes in building full-stack applications using MongoDB, Express, React, and Node.js. They manage both front-end and back-end development, creating dynamic, data-driven applications. With MongoDB for databases, Express and Node.js for the server, and React for the user interface, they handle everything from UI design to server-side logic, delivering seamless and efficient web solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="2500">
                    <input type="radio" name="my-accordion-3" />
                    <div className='md:flex collapse-title justify-between'>
                        <h2 className='text-3xl uppercase text-[#642165] font-bold'>Backend Developer</h2>
                        <div className=" text-lg">What is Backend Developer ?</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80 h-48' src={img3} alt="" />
                        <div className=''>
                            <h2 className='text-2xl font-bold mb-4'>Backend Developer</h2>
                            <p>A backend developer builds and maintains the server-side of web applications, focusing on databases, APIs, and server logic. They ensure data flow between the server and users, handle security, and optimize application performance. Skilled in languages like Python, Java, or Node.js, backend developers play a critical role in making applications scalable, secure, and efficient for user interactions.</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus" data-aos="fade-up" data-aos-duration="3000">
                    <input type="radio" name="my-accordion-3" />
                    <div className='md:flex collapse-title justify-between'>
                        <h2 className='text-3xl text-[#642165] uppercase font-bold'>
                            User Research</h2>
                        <div className=" text-lg">What is User Research in Programming ?</div>
                    </div>
                    <div className="collapse-content md:flex items-center gap-8">
                        <img className='w-80 h-48' src={img1} alt="" />
                        <div className=''>
                            <h2 className='text-2xl font-bold mb-4'>
                                User Research</h2>
                            <p>In programming, user research involves studying how people interact with software applications to gather insights into their needs, behaviors, and pain points. This research helps programmers and designers make informed decisions that improve usability, functionality, and user satisfaction. Techniques include usability testing, interviews, surveys, and analyzing user data, all aimed at creating software that aligns with users' expectations and enhances their overall experience.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;