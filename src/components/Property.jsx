import { Link } from "react-router-dom";
import 'animate.css';
import { MdOutlineRealEstateAgent, MdOutlineBedroomParent } from "react-icons/md";


const Property = ({ property }) => {
    const { id, image, estate_title, segment_name, price, status, area } = property;
    console.log(id)
    return (
        <div>
            <div className=" border rounded-lg hover:animate-none animate__zoomIn animate__animated transition  p-4 shadow-md">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between font-primary">
                            <h3 className="text-xl gap-2  font-semibold flex items-center "><MdOutlineRealEstateAgent className="text-[#00aeff]"></MdOutlineRealEstateAgent> {segment_name}</h3>
                            <p className="flex items-center gap-1 font-medium text-xl"><MdOutlineBedroomParent className="text-[#004274]"></MdOutlineBedroomParent> {status}</p>
                        </div>

                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <h3 className="text-2xl font-bold ">{estate_title}</h3>
                    <div className="flex justify-between text-lg font-medium">
                        <p>Area:{area}</p>
                        <p>Price:{price}</p>
                    </div>
                    <div className="space-y-2">

                        <Link to={'/details'}>
                            <button className='bg-[#00aeff]  hover:bg-[#004274] rounded-md  py-2 font-primary font-bold text-xl mt-5 text-white w-full'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;