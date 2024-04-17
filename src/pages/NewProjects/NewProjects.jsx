import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Apartments from "./Apartments";
import TownHall from "./TownHall";
import LuxuriousApartment from "./LuxuriousApartment";


const NewProjects = () => {
    const newProjects = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>New Project-Residential Complex</title>
            </Helmet>
            <h1 className="text-center md:text-3xl text-2xl font-primary font-bold md:my-8 my-5 bg-[#609dcb] text-white rounded md:py-5 py-2">Explore our new project </h1>
         <div className="space-y-10">
         <LuxuriousApartment newProjects={newProjects}></LuxuriousApartment>
         <h1 className=" bg-[#609dcb bg-[#004274]   rounded md:py-6 py-2"> </h1>
        
          
            <TownHall newProjects={newProjects}></TownHall>
            <h1 className=" bg-[#609dcb bg-[#004274]   rounded md:py-6 py-2"> </h1>
            <Apartments newProjects={newProjects}></Apartments>
         </div>
         
        </div>
    );
};

export default NewProjects;