import ModalCall from "../../components/ModalCall";
import ModalEmail from "../../components/ModalEmail";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const LuxuriousApartment = ({ newProjects }) => {
    AOS.init();
    return (
        <div className="bg-white">
            <ModalCall></ModalCall>
            <ModalEmail></ModalEmail>


            {/* apartment */}
            <h2 className="font-primary text-center text-[26px] pt-5 md:text-4xl font-bold">Our new Luxurious apartment </h2>
            <p className="text-center md:text-[20px] text-base lg:px-20 px-3 font-primary my-6 ">Explore luxurious apartment living at its finest with our exquisite selection of upscale residences. Indulge in unparalleled comfort, sophisticated design, and top-tier amenities that redefine modern living. From spacious floor plans to breathtaking views, each apartment is crafted to elevate your lifestyle to new heights. Immerse yourself in a world of elegance and convenience, where every detail is meticulously curated to exceed your expectations. Discover the epitome of luxury living and make every moment extraordinary in our prestigious apartments.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">


                <div
                 data-aos-duration="1400"  data-aos="zoom-in-up" 
                   className="  p-4 border shadow-lg rounded ">
                    <img src={newProjects[5].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[5].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[5].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[5].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[5].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[5].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[5].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>

                <div
                 data-aos-duration="1400" data-aos="zoom-in-up" 
                 className="  p-4 border shadow-lg rounded ">
                    <img src={newProjects[6].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[6].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[6].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[6].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[6].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[1].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[6].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>

                <div 
                data-aos-duration="1400"  data-aos="zoom-in-up" 
                className=" p-4 border shadow-lg rounded ">
                    <img src={newProjects[7].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] mt-2 text-[20px] text-start font-primary font-bold ">{newProjects[7].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[7].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[7].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[7].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[7].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[7].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuriousApartment;
LuxuriousApartment.propTypes = {
    newProjects: PropTypes.node
}