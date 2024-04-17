import ModalCall from "../../components/ModalCall";
import ModalEmail from "../../components/ModalEmail";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TownHall = ({ newProjects }) => {
    AOS.init();
    return (
        <div>
            <ModalCall></ModalCall>
            <ModalEmail></ModalEmail>


            {/* townhall */}
            <h2 className="font-primary text-center text-[26px] md:text-4xl  font-bold">Our New Town Hall</h2>
            <p className="text-center md:text-[20px] text-base lg:px-20 px-3 font-primary my-6 ">
            Discover the charm and convenience of town hall residential living in our vibrant community. Experience the perfect blend of historic elegance and modern comfort in our thoughtfully restored homes. Located within walking distance of bustling town centers, each residence offers easy access to shops, dining, and cultural attractions. Immerse yourself in the rich tapestry of community events and local festivities, fostering a sense of belonging and camaraderie. With a variety of housing options to suit every lifestyle, town hall residential living promises a unique and enriching experience for residents of all ages.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">


                <div  data-aos-duration="1600"  data-aos="fade-up-right" className="p-4 border shadow-lg rounded ">
                    <img src={newProjects[3].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[3].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[3].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[3].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[3].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[3].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[3].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>

                <div data-aos-duration="1600"  data-aos="fade-up-left" className="p-4 border shadow-lg rounded ">
                    <img src={newProjects[4].image} alt="" className="block object-cover object-center w-full rounded-md md:h-64 h-[200px] " />
                    <h3 className="md:text-[24px] text-[20px]  mt-2 text-start font-primary font-bold ">{newProjects[4].estate_title}</h3>

                    <p className="flex items-center gap-1 text-[#004274] text-lg my-1"><span className="font-bold text-xl">Location: </span> <FaLocationDot></FaLocationDot>{newProjects[4].location}</p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p><span className="font-bold text-xl">Area: </span>{newProjects[4].area}</p>
                        <p><span className="font-bold text-xl">Price:</span>{newProjects[4].price}</p>
                    </div>
                    <p className="text-lg my-2 font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                        {newProjects[1].facilities.map((facility, index) => <li className="ml-10 text-[#00aeff] font-bold" key={index}>{facility}</li>)}
                    </p>
                    <p className="border my-2 border-[#609dcb]"></p>
                    <p className="font-primary text-base font-medium my-1"><span className="font-bold">Description: </span>{newProjects[4].short_description}</p>
                    <div className="flex text-lg py-2 font-semibold gap-5 text-white">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                    </div>
                </div>
               


            </div>


        </div>
    );
};

export default TownHall;