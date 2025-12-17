import { getRoles } from "./clientActions";
import axios from "axios";
import { loginUser, setUser } from "./clientActions";
import { toast } from "react-toastify";
import { redirect } from "react-router";
import { setCategories } from "./productActions";

export const fetchRoles = () => (dispatch) => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/roles")
    .then((response) => {
        dispatch(getRoles(response.data));
    })
    .catch((error) => {
        console.error("Error fetching roles:", error);
    });
}

export const signUser = (user) => (dispatch) => {
    console.log("Signing up user:", user);
    delete user.confirmPassword;
    console.log("After deleting confirmPassword:", user);
    if(user.role_id !== '2' && user.store){
        delete user.store;
    }
    console.log("Data to be sent:", user);
    axios.post("https://workintech-fe-ecommerce.onrender.com/signup", user)
    .then((response) => {    
        alert("You need to click link in email to activate your account!");
        dispatch(setUser(response.data));         
        
    })
    .catch((error) => {
        console.error("Error logging in user:", error);
        console.log(error.response);
        alert(`Error: ${error.response.data.error}`);
    });
}

export const logUser = (user, history, redirectPath) => (dispatch) => {
    axios.post("https://workintech-fe-ecommerce.onrender.com/login", user)
    .then((response) => {
        toast.success("Login successful!");
        dispatch(loginUser(response.data));  
        if(user.rememberMe){
            localStorage.setItem("token", response.data.token);
            sessionStorage.removeItem("token");
        }
        else{
            sessionStorage.setItem("token", response.data.token);
            localStorage.removeItem("token");
        }
        if(history){
            history.push(redirectPath);
        }        
    })
    .catch((error) => {
        console.error("Error logging in user:", error);
        toast.error("Login failed. Please check your credentials.");
    });
}

export const getCategories = () => (dispatch) => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/categories")
    .then((response) => {
        dispatch(setCategories(response.data));
        console.log("Categories fetched:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching categories:", error);
    })
};