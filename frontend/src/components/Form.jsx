import React from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import "../styles/Form.css";
import useFormInput from "../hooks/useFormInput";

const Form = ({ route, method }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();
    const formInput = useFormInput({
        username: "",
        password: "",
    });

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log("error", error);
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
};

export default Form;
