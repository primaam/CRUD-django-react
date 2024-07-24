import React from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";

const useFormSubmit = () => {
    const handleSubmit = async ({ data, route }) => {
        const apiList = {
            login: "/api/token/",
            register: "/api/user/register/",
        };
        try {
            const result = await api.post(apiList[route], data);

            return result;
        } catch (error) {
            console.log(error);
        }
    };

    return { handleSubmit };
};

export default useFormSubmit;
