import { Link, useRouteError } from "react-router-dom";

import 'animate.css';
import { Helmet } from "react-helmet-async";

const Error = () => {

    const error = useRouteError();
    console.log(error)

   

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Helmet>
                <title>
                Error
                </title>
            </Helmet>
            <div
            className="space-y-8 animate__animated animate__backInDown justify-center flex items-center flex-col">
         
         <h2 className="font-extrabold text-5xl">Oops!!!</h2>
         <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
         <i className="text-lg font-medium">{error.statusText}</i>
         <Link to={'/'}><button className="px-4 py-2 rounded-lg text-white bg-[#00aeff] text-2xl font-bold border ">Go Back Home</button></Link>
     </div>
        </div>

    );
};

export default Error;