import React from "react";

const useFormInput = ({ initialState }) => {
    const init =
        initialState != undefined
            ? initialState
            : {
                  username: "",
                  password: "",
              };

    const [form, setForm] = React.useState(init);

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return { form, handleFormChange };
};

export default useFormInput;
