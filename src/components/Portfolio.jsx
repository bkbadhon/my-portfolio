import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../../public/yoga.png'
import img2 from '../../public/TOTC.png'
import img3 from '../../public/FurniFlex.png'
import img4 from '../../public/dream.png'
import img5 from '../../public/yoga2.png'
import img6 from '../../public/TOTC2.png'
import img7 from '../../public/FurniFlex2.png'
import img8 from '../../public/Dream-Foods2.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Portfolio = () => {
    return (
        <div id='Portfolio' className='w-11/12 my-16 mx-auto'>
            <h2 className='italic font-semibold p-2' data-aos="fade-right" data-aos-duration="1500">My Works</h2>
            <h2 className='md:text-5xl text-3xl uppercase font-bold' data-aos="fade-up" data-aos-duration="1500">RECENT PROJECT</h2>

            <div className='my-16 grid md:grid-cols-2 grid-cols-1 justify-between gap-12'>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img1} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>Yoga Study</h2>
                            <h3 className='text-lg font-bold'>Physical Exercise</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div >
                                    <img className='w-full' src={img5} alt="" />
                                    <h2 className='font-semibold text-xl my-4'>Yoga Study</h2>
                                    <h3 className='text-2xl font-bold'>Physical Exercise</h3>
                                    <p className='border-b-2 border-secondary p-2'>
                                        Mountain Pose (Tadasana): This is a simple standing posture that promotes balance and improves posture. Stand with feet together, arms at your sides, and distribute your weight evenly on both feet. Inhale, raise your arms overhead, and stretch upwards, keeping your spine straight. This pose helps ground you and build stability.
                                        <br />
                                        Downward-Facing Dog (Adho Mukha Svanasana): This classic yoga pose stretches the entire body, focusing on the shoulders, hamstrings, and calves. Start on all fours, tuck your toes, and lift your hips up to form an inverted “V” shape. Push your heels toward the ground and extend through your arms. This pose strengthens the arms, improves circulation, and relieves tension in the back and legs.
                                        <br />
                                        Warrior I (Virabhadrasana I): A powerful standing pose, Warrior I strengthens the legs and opens the chest and hips. Step one foot back, bend your front knee, and raise your arms overhead. Hold this pose while breathing deeply, then switch sides. Warrior I builds focus, stamina, and confidence.
                                        <br />
                                        Child’s Pose (Balasana): A restful pose, Child’s Pose stretches the back and relaxes the mind. Kneel on the floor, sit back on your heels, and extend your arms forward while lowering your torso toward the mat. Breathe deeply, letting your body relax.
                                    </p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
                                            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
                                            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
                                            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img2} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>Online School</h2>
                            <h3 className='text-lg font-bold'>School Management</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img6} alt="" />
                                    <h2 className='font-semibold'>Online School</h2>
                                    <h3 className='text-2xl font-bold'>School Management</h3>
                                    <p className='border-b-2 border-secondary p-2'>
                                        Student Enrollment and Admissions: The website simplifies the admission process by allowing parents to apply online. It can store all necessary student data, from personal information to academic records, in a secure and organized manner, making it easy to retrieve and update information.
                                        <br />
                                        Attendance Management: Teachers can mark daily attendance directly on the platform, which then notifies parents of absences or tardiness. The automated system reduces paperwork and makes tracking attendance seamless.
                                        <br />
                                        Gradebook and Assessments: Teachers can upload grades, assignments, and performance reports, providing students and parents with easy access to academic records. This transparency keeps parents informed of their child's progress and areas for improvement.
                                        <br />
                                        Timetable and Scheduling: The platform offers a centralized place for students and teachers to access class schedules, exam dates, and school events. Timetable management helps optimize resources like classrooms and labs and prevents scheduling conflicts.
                                        <br />
                                        Parent-Teacher Communication: Effective communication is vital for a successful school experience. Through the website, parents can message teachers, attend virtual parent-teacher conferences, and receive real-time updates on their child's progress.
                                        <br />
                                        Library and Resource Management: The platform can include a library module that tracks available books, borrowed materials, and return dates, making it easier for students to access resources.
                                    </p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
                                            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
                                            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
                                            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img3} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>Chair Shop</h2>
                            <h3 className='text-lg font-bold'>E-commerce Website</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img7} alt="" />
                                    <h2 className='font-semibold'>Chair Shop</h2>
                                    <h3 className='text-2xl font-bold'>E-commerce Website</h3>
                                    <p className='border-b-2 border-secondary p-2'>
                                        Diverse Product Range: From ergonomic office chairs and cozy recliners to sleek dining chairs and stylish outdoor seating, the site offers an extensive collection. Each product is carefully categorized to help customers easily find the type of chair they’re looking for. This variety ensures that customers can find options tailored to their specific needs, whether they’re furnishing a workspace, living room, or patio.
                                        <br />
                                        Detailed Product Descriptions and Reviews: Each chair listing includes high-quality images, detailed descriptions, dimensions, material specifications, and comfort features. Customer reviews and ratings help potential buyers make informed decisions based on real experiences, adding credibility and transparency to the shopping process.
                                        <br />
                                        Customization Options: For certain chairs, the site allows customization in color, upholstery, and even design elements. Customers can visualize the customization options through interactive previews, ensuring that they get exactly what fits their taste and space.
                                        <br />
                                        Guided Shopping and Recommendations: A built-in recommendation engine suggests chairs based on user preferences and previous purchases. The website might also include a buying guide or style quiz, helping customers find chairs that match their ergonomic needs, décor style, or budget.
                                        <br />
                                        User-Friendly Interface and Secure Checkout: The website is designed for a seamless browsing and checkout experience, with easy navigation, filtering options, and a secure payment gateway. With responsive design, customers can shop from any device.
                                        <br />
                                        Fast Delivery and Easy Returns: The site provides clear shipping times, return policies, and assembly instructions, making it easy for customers to shop confidently.
                                    </p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
                                            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
                                            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
                                            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-56' data-aos="zoom-in-up" data-aos-duration="1500" src={img4} alt="" />
                    <div className='flex flex-col justify-between'>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='font-semibold'>Dream Foods</h2>
                            <h3 className='text-lg font-bold'>Restaurant Website</h3>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}><IoIosArrowRoundForward className='-rotate-45 text-4xl' /></button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="text-xl px-2 my-4">X</button>
                                    </form>
                                </div>
                                <div>
                                    <img className='w-full' src={img8} alt="" />
                                    <h2 className='font-semibold'>Dream Foods</h2>
                                    <h3 className='text-2xl font-bold'>Restaurant Website</h3>
                                    <p className='border-b-2 border-secondary p-2'>
                                        Attractive, User-Friendly Design: A visually appealing and responsive design is essential. The website should reflect the restaurant’s ambiance and theme, with high-quality images, smooth navigation, and mobile optimization, ensuring a seamless experience across all devices.
                                        <br />
                                        Menu Display: The website should feature an easy-to-navigate digital menu with clear categories, descriptions, and high-quality images of dishes. It’s also beneficial to have dietary filters (e.g., vegetarian, gluten-free) and pricing information, giving customers a clear view of the offerings.
                                        <br />
                                        Online Reservations and Ordering: Integrate a reservation system for customers to book tables in advance, including options for selecting date, time, and party size. For restaurants offering delivery or takeout, include an online ordering feature that enables customers to add items to a cart, customize orders, and securely pay online.
                                        <br />
                                        Location and Contact Information: Include the restaurant’s address, map integration, operating hours, and contact details. A Google Maps integration and real-time chat support can improve customer convenience, making it easy to find the restaurant and reach out with any questions.
                                        <br />
                                        Customer Reviews and Testimonials: Display positive reviews and customer testimonials to build trust and encourage new patrons. Integration with platforms like Yelp or Google Reviews adds authenticity and helps customers make informed decisions.
                                        <br />
                                        Event and Promotion Management: Restaurants often have special events, offers, or seasonal menus. A dedicated section for announcements and promotional banners can help highlight these, keeping customers informed and engaged.
                                        <br />
                                        Newsletter Subscription and Social Media Links: Offer a subscription option for newsletters and link to social media pages. This helps retain customer interest, enabling the restaurant to share updates, specials, and events.
                                        <br />
                                        SEO Optimization: The website should be optimized for search engines to increase visibility. Include keyword-rich descriptions, metadata, and fast loading times to improve search rankings.
                                    </p>
                                    <div className='flex items-center justify-between my-8'>
                                        <div>
                                            <h2>Share</h2>
                                        </div>
                                        <div className='flex ml-4 mb-8 gap-4'>
                                            <a href="https://www.linkedin.com/in/badhon-barmon/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaLinkedin /></a>
                                            <a href="https://www.instagram.com/badhon.barmon1/" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaInstagram /></a>
                                            <a href="https://facebook.com/badhon.barmon2" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaFacebook /></a>
                                            <a href="https://github.com/bkbadhon" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 transition duration-500"><FaGithub /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;