import React from "react";
import { Form } from "../components";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useNavigate } from "react-router-dom";
import useFormSubmit from "../hooks/useFormSubmit";
import useFormInput from "../hooks/useFormInput";

const Register = () => {
    const [dataRegist, setDataRegist] = React.useState({
        username: "",
        password: "",
        repassword: "",
    });
    const [loading, setLoading] = React.useState(false);

    const { form, handleFormChange } = useFormInput();
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
        {
            name: "repassword",
            type: "password",
            placeholder: "Repeat Password",
        },
    ];

    console.log("form regist", form);
    const handleRegist = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (form.password === form.repassword) {
                const res = handleSubmit({
                    data: { username: form.username, password: form.password },
                    route: "register",
                });

                res.status === 201 || res.status === 200
                    ? navigate("/login")
                    : alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.log("Error during registration", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Form
            onSubmit={handleRegist}
            formData={formData}
            formTitle={"Register"}
            route={"/api/user/register/"}
            method={"register"}
        />
    );
};

export default Register;
