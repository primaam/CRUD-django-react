import React from "react";
import { Form } from "../components";
// import useFormInput from "../hooks/useFormInput";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useNavigate } from "react-router-dom";
import useFormSubmit from "../hooks/useFormSubmit";
import useFormInput from "../hooks/useFormInput";

const Login = () => {
    const [loading, setLoading] = React.useState(false);

    const { form } = useFormInput();
    const { handleSubmit } = useFormSubmit();
    const navigate = useNavigate();

    const formData = [
        {
            name: "username",
            type: "text",
            placeholder: "Username",
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password",
        },
    ];

    console.log("formlogin", form);
    const handleLogin = async () => {
        setLoading(true);
        try {
            const res = await handleSubmit({ data: form, route: "login" });

            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (error) {
            console.log("err", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form
                onSubmit={handleLogin}
                formData={formData}
                formTitle={"Login"}
                route={"/api/token/"}
                method={"login"}
            />
        </>
    );
};

export default Login;
