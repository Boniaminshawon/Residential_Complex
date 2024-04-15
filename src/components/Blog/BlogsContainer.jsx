import { Link} from "react-router-dom";
import { PiPenNibDuotone } from "react-icons/pi";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";


const BlogsContainer = ({blog}) => {

    const { title, blog_image,date, writer,id,description } = blog;

    AOS.init();

    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <section className="">
                
                <div >
                    
                    <div  data-aos-duration="1500" data-aos="zoom-in-up"  >
                        
                        <Link to={`/blogs/${id}`} className="mx-auto  shadow-lg flex border-dotted border p-3 border-[#001d74] rounded  mb-5 group hover:no-underline focus:no-underline ">
                          <div className="w-[32%] ">
                          <img role="presentation" className="object-cover w-full rounded-md sm:h-56 h-44 " src={blog_image} />
                          </div>
                            <div className=" flex-1   p-4 space-y-2">
                                <h3 className="sm:text-2xl text-xl font-semibold group-hover:underline group-focus:underline ">{title}</h3>
                                <div className="flex justify-between font-medium sm:text-lg py-3">
                                    <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {writer}</p>

                                    {/* <p className=" font-secondary">{date}</p> */}
                                </div>
                                <p className="text-lg">{description.slice(0, 150)} <span className="font-bold sm:text-xl text-lg">...Read More</span></p>

                            </div>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BlogsContainer;