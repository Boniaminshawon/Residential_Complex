

const Agents = () => {
    return (
        <div className="text-center lg:mt-20  mt-8 md:mt-[70px] bg-white">
            <h2 className="font-primary text-[26px] md:text-4xl font-bold">Meet Our Agents</h2>

            <p className="md:text-lg text-base lg:px-32 md:mt-6 mb-10 mt-5 md:px-20 px-5  font-primary">Our residential real estate website, we highlight these reasons and emphasize our agent's expertise, dedication, and commitment to providing exceptional service to every client. We invite visitors to schedule a meeting with our agent to discuss their real estate goals and how we can help them achieve them.</p>

            <div className="flex flex-col md:flex-row gap-4">


                <div className="text-center flex-1 p-6 transition  hover:scale-105 shadow-lg">
                    <div className="flex justify-center">
                        <img className="rounded-full" src="https://i.ibb.co/N3ZsrHt/images-8.jpg" alt="" />
                    </div>
                    <p className="text-[#00aeff] md:text-[26px] text-2xl font-bold mt-3">Vincent Fuller</p>
                    <p className="font-semibold md:text-xl text-lg mt-2">Real Estate Agent , Country House Real Estate</p>
                    <p className="text-base font-medium font-primary mt-6">Meet Vincent Fuller, your trusted Real Estate Agent at Country House Real Estate. With a passion for matching clients with their perfect properties, Vincent brings dedication and expert knowledge to every transaction. Experience personalized service and seamless transactions with Vincent Fuller by your side.</p>
                    <button className="text-white py-2 px-5 font-primary rounded btn text-lg font-bold mt-5 bg-[#00aeff]">View Profile</button>
                </div>



                <div className="text-center  flex-1 hover:scale-105 shadow-lg transition p-6">
                    <div className="flex justify-center">
                        <img className="rounded-full" src="https://i.ibb.co/hR8GHtf/images-6.jpg" alt="" />
                    </div>
                    <p className="text-[#00aeff] md:text-[26px] text-2xl font-bold mt-3">Michelle Ramirez
                    </p>
                    <p className="font-semibold md:text-xl text-lg mt-2">Company Agent , Modern House Real Estate</p>
                    <p className="text-base font-medium font-primary mt-6">Introducing Michelle Ramirez, your trusted Company Agent at Modern House Real Estate. Michelle embodies a modern approach to real estate, blending cutting-edge technology with personalized service to exceed client expectations. Experience innovation and excellence with Michelle Ramirez at Modern House Real Estate.</p>
                    <button className="text-white py-2 mt-5 px-5 font-primary rounded btn text-lg font-bold bg-[#00aeff]">View Profile</button>
                </div>




                <div className="text-center p-6 flex-1 transition hover:scale-105 shadow-lg">
                   <div className="flex justify-center">
                   <img className="rounded-full" src="https://i.ibb.co/jbYgckK/images-7.jpg" alt="" />
                   </div>
                    <p className="text-[#00aeff] md:text-[26px] text-2xl font-bold mt-3">Brittany Watkins</p>
                    <p className="font-semibold md:text-xl text-lg mt-2">Company Agent , All American Real Estate</p>
                    <p className="text-base font-medium font-primary mt-6">Meet Brittany Watkins, your dedicated Company Agent at All American Real Estate. Whether buying or selling, clients trust Brittany for her expertise, professionalism, and unwavering support throughout their journey. Experience the difference with Brittany Watkins at All American Real Estate..</p>
                    <button className="text-white py-2 mt-5 px-5 font-primary rounded btn text-lg font-bold bg-[#00aeff]">View Profile</button>
                </div>

            </div>

        </div>
    );
};

export default Agents;