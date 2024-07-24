import React from "react";

const useFormInput = ({ initialState = {} }) => {
    const [form, setForm] = React.useState(initialState);

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return { form, handleFormChange };
};

export default useFormInput;
