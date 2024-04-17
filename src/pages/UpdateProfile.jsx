import { Helmet } from "react-helmet-async";
import UseAuth from "../Hooks/UseAuth";


const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = UseAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.photo.value;

        updateUserProfile(name, image)
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: image })
                console.log(user);
            })
    }
    return (
        <div className="flex justify-center  bg-white">
            <Helmet>
                <title>
                    Update Profile-Residential Complex
                </title>
            </Helmet>
            <div className="flex flex-col w-full justify-center  py-6  rounded-xl md:px-12 ">
                <div className="text-center ">
                    <h1 className="md:text-4xl text-[28px] font-bold">Update your profile</h1>
                </div>


                <div className="md:hero  ">
                    <div className="hero-content  md:w-[500px] flex-col ">

                        <img src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
                        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-xl">Your Name</span>
                                    </label>
                                    <input defaultValue={user.displayName || 'User Name not found'} type="text" name="name" className="input font-semibold input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-xl">Your Email</span>
                                    </label>
                                    <input type="email" value={user.email} className="input input-bordered text-[#00aeff]  font-semibold" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-xl">Photo url</span>
                                    </label>
                                    <input type="text" name="photo" defaultValue={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} className="font-semibold input input-bordered" />
                                </div>


                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-primary">Update</button> */}
                                    <input type="submit" value="Update" className="bg-[#00aeff] text-white hover:bg-[#004274] btn py-2 rounded font-bold text-xl" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;