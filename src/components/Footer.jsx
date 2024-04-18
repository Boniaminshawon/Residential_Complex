
const Footer = () => {
    return (
        <div>
            <footer className="lg:px-16 py-7 md:pt-16 md:pb-10 text-white bg-[#00335a]  mt-5 md:mt-11">

                <div className=" flex flex-col justify-center items-center lg:items-start  lg:justify-between  md:pb-10  pb-5 lg:flex-row ">
                    <div className="lg:w-[35%]  lg:flex-1 md:w-[70%]  flex flex-col justify-start  font-primary">
                        <div className=" flex justify-center ">
                            <img className="lg:w-[50%] md:w-[35%] w-[50%] " src="https://i.ibb.co/hRBXMRc/image.png" alt="" />
                        </div>

                        <p className="text-center mt-3">
                            <i className="md:text-xl  text-lg md:my-4 my-2  ">Providing  Single-family homes, townhouses, apartments, student
                                housing, senior living communities, vacation rentals etc.
                                since 1992 .</i>
                        </p>
                    </div>


                    <div className="flex  flex-col lg:pl-24 md:flex-row justify-center items-center md:items-start  mt-4 md:mt-7 lg:mt-0 md:space-x-40 lg:space-x-0">
                        <div className="flex  justify-between  lg:gap-28  md:gap-48 gap-20 ">
                            <div className="space-y-3">
                                <h3 className="tracking-wide text-[#ffffcc] uppercase font-primary md:text-xl text-lg font-bold">Product</h3>
                                <ul className="space-y-1 font-primary md:text-lg text-base">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Features</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Integrations</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3 ">
                                <h3 className="uppercase font-primary text-[#ffffcc]  md:text-xl text-lg font-bold">Developers</h3>
                                <ul className="space-y-1 font-primary md:text-lg text-base">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Public API</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Guides</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-3 md:mt-0 lg:pl-24 mt-2">
                            <div className="uppercase font-primary text-[#ffffcc]  md:text-xl text-lg font-bold">Social media</div>
                            <div className="grid grid-flow-col  gap-8">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-sky-400  "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current text-red-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-current  text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="border border-white mb-4 md:mb-7"></div>
                <div className="text-center font-primary"> <i className="font-semibold md:text-2xl text-lg text-[#ffffcc] ">Copyright © 2024 - All right reserved</i></div>
            </footer>
        </div>
    );
};

export default Footer;