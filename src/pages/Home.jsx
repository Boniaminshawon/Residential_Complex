import Banner from "../components/Banner";
import Properties from "../components/Properties";
import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Properties properties={properties}></Properties>

        </div>
    );
};

export default Home;