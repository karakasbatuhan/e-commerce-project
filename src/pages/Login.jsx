import { logUser } from "../store/actions/globalActions";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

export default function Login() {

const dispatch = useDispatch();
const history = useHistory();
const location = useLocation();
const userInfo = useSelector((state) => state.client.user);
const userName = useSelector((state) => state.client.user?.name);
const [passwordVisible, setPasswordVisible] = useState(false);

const { register, handleSubmit, reset , formState: { errors, isValid}} = useForm({
    mode: "onSubmit",
    defaultValues: {
        email: "",
        password: "",
        rememberMe: false
    }
});

const previousPage = location.state?.referrer || "/";

function submitFn(formData) {        
    console.log("Form Data Submitted: ", formData);
    dispatch(logUser(formData, history, previousPage));
    reset();
    history.push("/login");
};

    return (
        <div className="flex flex-row justify-center items-center bg-gray-200 h-[700px] w-[100%] font-montserrat">
            <div className="flex flex-col justify-center items-center bg-white h-[500px] w-[350px] rounded-2xl shadow-xl/40">
                <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit(submitFn)}>
                    <h3 className="font-bold text-[25px]">LOGIN</h3>
                    <div className="flex flex-col">
                        <label htmlFor="e-mail" className="font-semibold text-[18px]">E-mail</label>
                        <input type="email" id="e-mail" 
                        {...register("email")}                       
                        placeholder="E-mail" className="border-1 border-black rounded-md w-[300px] p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" type={passwordVisible ? "text" : "password"} className="font-semibold text-[18px]">Password</label>
                        <div className="flex flex-row items-center border-1 border-black rounded-md w-[300px]">
                            <input type={passwordVisible ? "text" : "password"} id="password" 
                            {...register("password")} 
                            placeholder="Password" className="p-2 focus:outline-none"/>
                            <div className="pl-13" onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? <BiHide size={20} className="text-gray-400"/> : <BiShow size={20} className="text-gray-400"/>}
                            </div>
                        </div>                       
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id="rememberMe"  {...register("rememberMe")} className="cursor-pointer"/>
                            <label htmlFor="rememberMe" className="font-semibold text-[14px] text-gray-500">Remember me</label>                            
                        </div>
                        <button className="w-[300px] h-[50px] bg-blue-400 rounded-xl text-white font-semibold text-[14px] mt-3 mb-2 cursor-pointer hover:transition-all hover:scale-105">LOGIN</button>                        
                        <div className="flex flex-col justify-center items-center gap-2 mt-2">
                            <p className="font-semibold text-[14px] text-gray-500">Don't have an account?</p>
                            <a href="/signup" className="underline font-semibold text-[14px] text-blue-500 hover:transition hover:scale-105">Sign-Up</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
        