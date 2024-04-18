import Banner from "../components/Banner";
import Properties from "../components/Properties";
import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Testimonials from "../components/Testimonials";
import Agents from "../components/Agents";



const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home-Residential Complex</title>
            </Helmet>
            <Banner></Banner>
            <Properties properties={properties}></Properties>
            <Agents></Agents>
            <div className=""><Testimonials></Testimonials></div>

        </div>
    );
};

export default Home;