import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { MdOutlineRealEstateAgent, MdOutlineBedroomParent, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ModalCall from "./ModalCall";
import ModalEmail from "./ModalEmail";

const PropertyDetails = () => {
    const properties = useLoaderData();

    const { id } = useParams();

    const property = properties.find(property => property.id === id);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="bg-white">
            <ModalCall></ModalCall>
            <ModalEmail></ModalEmail>
            <h1 className="text-center text-3xl font-primary font-bold my-8 bg-[#609dcb] text-white rounded py-5">Details of this Property</h1>
            <div className="flex gap-4">

                <div className="w-[45%] flex justify-center items-center  p-4  border-[#609dcb] rounded border-2 border-dotted">
                    <img className="rounded h-full" src={property.image} alt="" />
                </div>
                <div className="flex-1 p-5  border-[#609dcb] border-dotted rounded border-2">

                    {/* <p className="border border-[#609dcb]"></p> */}
                    <div className="flex justify-between my-2 font-primary">
                        <h3 className="text-xl gap-2  font-semibold flex items-center "> Category: <MdOutlineRealEstateAgent className="text-[#00aeff]"></MdOutlineRealEstateAgent> {property.segment_name}</h3>
                        <p className="flex items-center gap-1 font-medium text-xl"><MdOutlineBedroomParent className="text-[#004274]"></MdOutlineBedroomParent> {property.status}</p>
                    </div>
                    <p className="border my-4 border-[#609dcb]"></p>

                    <div className="space-y-3">
                        <h2 className="text-3xl font-primary text-[#004274]   font-bold">{property.estate_title}</h2>
                        <p className="text-lg"><span className="font-semibold text-xl">Location:  </span>{property.location}</p>
                        <p className="text-xl font-primary">{property.description}</p>
                    </div>

                    <p className="border my-4 border-[#609dcb]"></p>

                    <div className="space-y-2">

                        <p className="text-lg"><span className="font-semibold text-xl">Area:  </span>{property.area}</p>
                        <p className="text-lg"><span className="font-semibold text-xl">Price:  </span>{property.price}</p>
                        <p className="text-lg font-primary"><span className="font-medium text-xl">Special facilities:  </span>

                            {property.facilities.map((facility, index) => <li className="ml-10  font-semibold" key={index}>{facility}</li>)}

                        </p>
                        <div className="flex text-base font-semibold gap-5 text-white">
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex items-center gap-2 bg-[#e5eff0] text-green-700 hover:text-red-500  rounded-md px-4 py-1"><FiPhoneCall></FiPhoneCall>Call</button>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="flex items-center gap-2 text-green-700 bg-[#e5eff0] hover:text-red-500 px-4 rounded-md py-1"><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>Email</button>
                        </div>
                        <div className="pt-4">
                            <button onClick={handleGoBack} className="py-2 text-white bg-[#2d74aa] bg-[#00aeff font-bold text-lg font-primary hover:bg-[#004274] w-full rounded-md">Go Back</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default PropertyDetails;