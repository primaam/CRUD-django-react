import React from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import "../styles/Form.css";
import useFormInput from "../hooks/useFormInput";

const Form = ({ onSubmit, formTitle, formData }) => {
    const { form, handleFormChange } = useFormInput();

    // const handleSubmit = async (e) => {
    //     setLoading(true);
    //     e.preventDefault();

    //     try {
    //         const res = await api.post(route, form);
    //         if (method === "login") {
    //             localStorage.setItem(ACCESS_TOKEN, res.data.access);
    //             localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    //             navigate("/");
    //         } else {
    //             navigate("/login");
    //         }
    //     } catch (error) {
    //         console.log("error", error);
    //         alert(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <h1>{formTitle}</h1>
            {formData.map((item, i) => {
                return (
                    <input
                        key={i}
                        className="form-input"
                        type={item.type}
                        name={item.name}
                        value={form[item.name]}
                        onChange={(e) => handleFormChange(e)}
                        placeholder={item.placeholder}
                    />
                );
            })}
            {/* <input
                className="form-input"
                type="text"
                name="username"
                value={form.username}
                onChange={(e) => handleFormChange(e)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => handleFormChange(e)}
                placeholder="Password"
            /> */}
            <button className="form-button" type="submit">
                {formTitle}
            </button>
        </form>
    );
};

export default Form;
