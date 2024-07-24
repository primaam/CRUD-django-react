import React from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";

const useFormSubmit = async ({ data, route }) => {
    const apiList = {
        login: "/api/token/",
        register: "/api/user/register/",
    };

    // const navigate = useNavigate();

    const result = await api.post(apiList[route], data);

    // const handleSubmit = async () => {

    //     try {

    //         switch (route) {
    //             case "login":
    //                 localStorage.setItem(ACCESS_TOKEN, res.data.access);
    //                 localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    //                 navigate("/");
    //                 break;
    //             case "register":
    //                 navigate("/login");
    //                 break;
    //             default:
    //                 break;
    //         }
    //     } catch (error) {
    //         alert(error);
    //     }
    // };

    return result;
};

export default useFormSubmit;
