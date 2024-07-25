import React from "react";
import { Form } from "../components";
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
    {
        name: "repassword",
        type: "password",
        placeholder: "Repeat Password",
    },
];

const initialFormState = {
    username: "",
    password: "",
    repassword: "",
};

const Register = () => {
    const [loading, setLoading] = React.useState(false);

    const { handleSubmit } = useFormSubmit();
    const { form, handleFormChange } = useFormInput(initialFormState);
    const navigate = useNavigate();

    const handleRegist = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (form.password === form.repassword) {
                const payload = {
                    username: form.username,
                    password: form.password,
                };
                const res = await handleSubmit({ data: payload, route: "register" });

                res.status === 201 || res.status === 200
                    ? navigate("/login")
                    : alert("Registration failed. Please try again.");
            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.log("Error during registration", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form
                loading={loading}
                data={form}
                onChange={(e) => handleFormChange(e)}
                onSubmit={handleRegist}
                formData={formData}
                formTitle={"Register"}
            />
        </>
    );
};

export default Register;
