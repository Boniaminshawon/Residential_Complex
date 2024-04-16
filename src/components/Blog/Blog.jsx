import { Link, useLoaderData } from "react-router-dom";
import { PiPenNibDuotone } from "react-icons/pi";
import BlogsContainer from "./BlogsContainer";
import { Helmet } from "react-helmet-async";


const Blog = () => {
    const blogs = useLoaderData();
 

    return (
        <section className="">
            <Helmet>
                <title>
                    Blog-Residential Complex
                </title>
            </Helmet>
             <h1 className="text-center md:text-3xl text-2xl font-primary font-bold md:my-8 my-5 bg-[#609dcb] text-white rounded md:py-5 py-2">Explore your residential knowledge</h1>
            <div className=" md:p-6 p-3  bg-white space-y-6 font-primary sm:space-y-12">
                <div>
                    <Link to={`/blogs/${blogs[2].id}`} className=" md:flex md:flex-col max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={blogs[2].blog_image} alt="" className="object-cover w-full h-56 rounded-md sm:h-96 lg:col-span-7 " />
                        <div className="md:p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-xl mt-3 md:mt-0 font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[2].title}</h3>
                            <div className="flex justify-between font-medium text-lg py-3">
                                <p className=" font-secondary flex items-center gap-2"><PiPenNibDuotone></PiPenNibDuotone> {blogs[2].writer}</p>

                                <p className=" font-secondary">{blogs[2].date} </p>
                            </div>

                            <p className="md:text-lg text-base">{blogs[2].description.slice(0, 250)}  <span className="font-bold md:text-xl text-lg">...Read More</span></p>
                        </div>
                    </Link>

                </div>


                <div className=" ">
                {
                    blogs.map(blog => <BlogsContainer key={blog.id} blog={blog} blogs={blogs}></BlogsContainer> )
                }
            </div>

            </div>
        </section>
    );
};

export default Blog;