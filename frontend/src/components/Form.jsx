import React from "react";
import "../styles/Form.css";

const Form = ({ onSubmit, formTitle, formData, data, loading, onChange }) => {
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
                        value={data[item.name]}
                        onChange={onChange}
                        placeholder={item.placeholder}
                    />
                );
            })}
            <button className="form-button" type="submit">
                {loading == false ? formTitle : "Loading ..."}
            </button>
        </form>
    );
};

export default Form;
