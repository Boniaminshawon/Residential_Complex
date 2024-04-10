import Banner from "../components/Banner";
import Properties from "../components/Properties";
import { useLoaderData } from "react-router-dom";



const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Properties properties={properties}></Properties>

        </div>
    );
};

export default Home;