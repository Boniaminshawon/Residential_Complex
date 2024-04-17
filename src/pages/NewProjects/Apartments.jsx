import ModalCall from "../../components/ModalCall";
import ModalEmail from "../../components/ModalEmail";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Apartments = ({ newProjects }) => {
    AOS.init();

    return (
        <div className="bg-white">
            <ModalCall></ModalCall>
            <ModalEmail></ModalEmail>


            {/* apartment */}
            <h2 className="font-primary text-center text-[26px]  md:text-4xl font-bold">Our new apartment for single family</h2>
            <p className="text-center md:text-[20px] text-base lg:px-20 px-3 font-primary my-6 ">
             Experience the warmth and comfort of single-family residential living in our charming homes. Nestled in serene neighborhoods, each residence offers a haven of tranquility and privacy. Enjoy the spaciousness and flexibility of your own yard, perfect for outdoor gatherings or quiet relaxation. With thoughtfully designed interiors and modern amenities, our single-family homes provide the ideal backdrop for creating lasting memories with loved ones. Embrace the sense of community and belonging that comes with living in a residential neighborhood, where neighbors become friends and every street feels like home.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">


                <div data-aos-duration="1600"  data-aos="fade-up-right" className="p-4 border shadow-lg rounded ">
                    <img src={newProjects[0].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[0].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[0].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[0].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[0].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[0].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[0].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>

                <div data-aos-duration="2000" data-aos="zoom-in-up" className="p-4 border shadow-lg rounded ">
                    <img src={newProjects[1].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[1].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[1].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[1].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[1].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[1].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[1].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>

                <div data-aos-duration="1600"  data-aos="fade-up-left" className="p-4 border shadow-lg rounded ">
                    <img src={newProjects[2].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] mt-2 text-[20px] text-start font-primary font-bold ">{newProjects[2].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[2].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[2].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[2].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[2].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[2].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Apartments;