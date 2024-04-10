import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import 'animate.css';
import UseAuth from "../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa6";


const Login = () => {
    const { signIn } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });

    };
    return (
        <div className="bg-green-300 flex justify-center ">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <h2 className="font-primary font-medium text-2xl mb-7  animate-pulse">If you don't have any account. Please <Link className="underline text-[#00aeff] font-semibold text-2xl" to={'/register'}>Register</Link> first, or use social login.</h2>
                    <div className="card shrink-0 w-[450px] shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl mt-5 font-bold">Login now!</h1>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control relative ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }

                                </span>

                               

                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#00aeff] text-white font-bold btn hover:bg-[#004274] text-lg" value="Login" />
                            </div>
                        </form>
                        <div className="pl-8 pb-7 font-primary font-medium text-xl">
                            <p>Don't have account? Please <Link className="underline text-[#00aeff] font-semibold text-2xl" to={'/register'}>Register</Link></p>
                        </div>
                        <hr />
                        <div className="font-primary text-xl text-center mt-3 mb-7 font-bold">
                            <p className="text-[#004274]"> Continue with Social login</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;