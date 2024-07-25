import React from "react";
import { Form } from "../components";
// import useFormInput from "../hooks/useFormInput";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useNavigate } from "react-router-dom";
import useFormSubmit from "../hooks/useFormSubmit";
import useFormInput from "../hooks/useFormInput";

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

const initialFormState = {
    username: "",
    password: "",
};

const Login = () => {
    const [loading, setLoading] = React.useState(false);

    const { form, handleFormChange } = useFormInput(initialFormState);
    const { handleSubmit } = useFormSubmit();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
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
                loading={loading}
                onSubmit={handleLogin}
                formData={formData}
                data={form}
                formTitle={"Login"}
                onChange={(e) => handleFormChange(e)}
            />
        </>
    );
};

export default Login;
