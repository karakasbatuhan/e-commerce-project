import { get } from "react-hook-form";
import { setRoles } from "./clientActions";
import axios from "axios";

export const fetchRoles = () => (dispatch, getState) => {
    const { client } = getState();

    if(client.roles.length > 0) {
        console.log("Roles already fetched.");
        return;
    }


    axios.get("https://workintech-fe-ecommerce.onrender.com/roles")
    .then((response) => {
        dispatch(setRoles(response.data));
    })
    .catch((error) => {
        console.error("Error fetching roles:", error);
    });
}