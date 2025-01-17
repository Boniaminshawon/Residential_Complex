import { Link } from "react-router-dom";
import 'animate.css';
import { MdOutlineRealEstateAgent, MdOutlineBedroomParent, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import ModalCall from "./ModalCall";
import ModalEmail from "./ModalEmail";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Property = ({ property }) => {
    const { id, image, estate_title, segment_name, price, status, area } = property;

    AOS.init();


    return (
        <div>
           
            <div data-aos-duration="1400" data-aos="zoom-in-up" className=" border rounded-lg md:p-4 p-[10px] shadow-md">

                <div className="md:space-y-4 space-y-3">
                    <div className="space-y-2 ">
                        <div className="flex justify-between font-primary">
                            <h3 className="md:text-xl text-lg gap-2 text-start  font-semibold flex justify-start items-center "><MdOutlineRealEstateAgent className="text-[#00aeff]"></MdOutlineRealEstateAgent> {segment_name}</h3>

                            <p className="flex items-center gap-1 font-medium md:text-xl text-lg"><MdOutlineBedroomParent className="text-[#004274]"></MdOutlineBedroomParent> {status}</p>
                        </div>

                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md md:h-72 h-[210px] " />
                    </div>
                    <h3 className="md:text-[26px] text-[22px] text-start font-primary font-bold ">{estate_title}</h3>
                    <div className="flex justify-between md:text-lg text-base font-medium">
                        <p>Area:{area}</p>
                        <p>Price:{price}</p>
                    </div>

                    <div className="">

                        <div className="flex text-base font-semibold gap-5 text-white">
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                        </div>

                        <Link to={`/${id}`}>
                            <button className='bg-[#00aeff]  hover:bg-[#004274] rounded-md  py-2 font-primary font-bold text-xl  mt-5 text-white w-full'>View Property</button>
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
Property.propTypes = {
    property: PropTypes.node
}