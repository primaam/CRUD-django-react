import React from "react";

const useFormInput = () => {
    const [form, setForm] = React.useState({});

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    console.log("form", form);
    return { form, handleFormChange };
};

export default useFormInput;
