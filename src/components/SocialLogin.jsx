import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";

const SocialLogin = () => {
    const { googleSignIn,githubSignIn } = UseAuth();
    return (
        <div className="flex justify-around text-white mt-5">
            <button onClick={()=>googleSignIn()} className="flex items-center gap-2  px-3 py-1 rounded-md hover:bg-[#00aeff] bg-green-800">
                <FaGoogle></FaGoogle>Google
            </button>
            <button onClick={()=>githubSignIn()} className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-[#00aeff] bg-black">
                <FaGithub></FaGithub>Github
            </button>
        </div>
    );
};

export default SocialLogin;