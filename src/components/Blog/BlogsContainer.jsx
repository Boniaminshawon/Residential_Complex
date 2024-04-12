import { Link} from "react-router-dom";
import { PiPenNibDuotone } from "react-icons/pi";



const BlogsContainer = ({blog}) => {
    console.log(blog)
    const { title, blog_image,date, writer,id,description } = blog;



    return (
        <div>
            <section className="hover:animate-pulse animate__slow animate__zoomIn animate__animated">
                <div >
                    <div >
                        <Link to={`/blogs/${id}`} className="mx-auto   group hover:no-underline focus:no-underline ">
                            <img role="presentation" className="object-cover w-full rounded-md sm:h-56 h-44 " src={blog_image} />
                            <div className="md:py-6 pl-3 space-y-2">
                                <h3 className="sm:text-2xl text-xl font-semibold group-hover:underline group-focus:underline h-24">{title}</h3>
                                <div className="flex justify-between font-medium sm:text-lg py-3">
                                    <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {writer}</p>

                                    <p className=" font-secondary">{date}</p>
                                </div>
                                <p className="text-lg">{description.slice(0, 100)} <span className="font-bold sm:text-xl text-lg">...Read More</span></p>

                            </div>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BlogsContainer;