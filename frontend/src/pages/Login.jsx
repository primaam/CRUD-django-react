import React from "react";
import { Form } from "../components";
import useFormInput from "../hooks/useFormInput";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useNavigate } from "react-router-dom";
import useFormSubmit from "../hooks/useFormSubmit";

const Login = () => {
    const [loading, setLoading] = React.useState(false);

    const loginForm = useFormInput({
        username: "",
        password: "",
    });

    const formSubmit = useFormSubmit({
        data: loginForm.form,
        route: "login",
    });

    const handleLogin = async () => {
        const payload = loginForm.form;
        setLoading(true);
        try {
        } catch (error) {
            console.log("err", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form route={"/api/token/"} method={"login"} />
        </>
    );
};

export default Login;
