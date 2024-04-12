import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import 'animate.css';
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
import swal from 'sweetalert';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = UseAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        const { email, password } = data;
        console.log(email, password);


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lowercase character.');
            return;
        }
        
        setRegisterError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                swal("Wow!", "Registered successfully!", "success");

            })
            .catch(error => {
                console.log(error);
            });

        resetField('email')
        resetField('password')
        resetField('photo')
        resetField('name')

    };



    return (
        <div className="bg-green-300 flex justify-center ">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0 w-[450px] shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl mt-5 font-bold">Register now!</h1>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name")}
                                />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered"
                                    {...register("photo")}
                                />

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

                                {registerError && <p className="text-red-500 font-primary text-lg mt-1">{registerError}</p>}

                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#00aeff] text-white font-bold btn hover:bg-[#004274] text-lg" value="Register" />
                            </div>
                        </form>
                        <div className="pl-8 pb-7 font-primary font-medium text-xl">
                            <p>Already have account? Please <Link className="underline text-[#00aeff] font-semibold text-2xl" to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;