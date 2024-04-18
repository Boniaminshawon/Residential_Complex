import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Apartments from "./Apartments";
import TownHall from "./TownHall";
import LuxuriousApartment from "./LuxuriousApartment";


const NewProjects = () => {
    const newProjects = useLoaderData();

    return (
        <div  className="bg-white">
            <Helmet>
                <title>New Project-Residential Complex</title>
            </Helmet>

            <div className="hero md:h-[450px]  bg-center bg-cover" style={{ backgroundImage: 'url( https://i.ibb.co/ryKGSng/maxresdefault-2.jpg)' }}>

                <div className="hero-overlay bg-opacity-35"> </div>

                <div className="hero-content   text-center ">
                    <div className="animate__animated animate__backInDown animate__slow">
                        <div className="flex  justify-center">
                            <img className="w-[27%]" src="https://i.ibb.co/hRBXMRc/image.png" alt="" />
                        </div>
                        <h1 className="mt-5 font-primary  text-2xl md:text-5xl text-[#00d5ff text-white font-bold animate__animated animate__fadeInUpBig animate__slow ">Choose The Best Luxury Property</h1>
                       
                        
                    </div>
                </div>
            </div>

            <div className="md:space-y-20 lg:space-y-24 space-y-10 mt-5">
                <LuxuriousApartment newProjects={newProjects}></LuxuriousApartment>
            
                <TownHall newProjects={newProjects}></TownHall>
              
                <Apartments newProjects={newProjects}></Apartments>
            </div>

        </div>
    );
};

export default NewProjects;