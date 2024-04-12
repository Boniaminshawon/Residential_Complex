import { Link } from "react-router-dom";
import 'animate.css';
import { MdOutlineRealEstateAgent, MdOutlineBedroomParent, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import ModalCall from "./ModalCall";
import ModalEmail from "./ModalEmail";


const Property = ({ property }) => {
    const { id, image, estate_title, segment_name, price, status, area } = property;




    return (
        <div>

            <div className=" border rounded-lg hover:animate-pulse animate__zoomIn animate__animated transition  p-4 shadow-md">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between font-primary">
                            <h3 className="text-xl gap-2  font-semibold flex items-center "><MdOutlineRealEstateAgent className="text-[#00aeff]"></MdOutlineRealEstateAgent> {segment_name}</h3>
                            <p className="flex items-center gap-1 font-medium text-xl"><MdOutlineBedroomParent className="text-[#004274]"></MdOutlineBedroomParent> {status}</p>
                        </div>

                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 " />
                    </div>
                    <h3 className="text-[26px] text-start font-primary font-bold ">{estate_title}</h3>
                    <div className="flex justify-between text-lg font-medium">
                        <p>Area:{area}</p>
                        <p>Price:{price}</p>
                    </div>

                    <div className="">
                        
                        <div className="flex text-base font-semibold gap-5 text-white">
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                        </div>

                        <Link to={`/${id}`}>
                            <button className='bg-[#00aeff]  hover:bg-[#004274] rounded-md  py-2 font-primary font-bold text-xl mt-5 text-white w-full'>View Property</button>
                        </Link>

                        <ModalCall></ModalCall>
                        <ModalEmail></ModalEmail>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Property;