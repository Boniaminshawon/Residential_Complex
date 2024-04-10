import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const UseAuth = () => {
    const allContext = useContext(AuthContext);
    return (
        allContext
    );
};

export default UseAuth;