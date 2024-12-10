import React, { useState } from "react";

// Define a type for form fields
type Field = {
    type: string;
    label: string;
    required: boolean;
};

const FormBuilder: React.FC = () => {
    const [fields, setFields] = useState<Field[]>([]);
    const [formTitle, setFormTitle] = useState("");

    // Function to add a new field
    const addField = (type: string) => {
        setFields([...fields, { type, label: "", required: false }]);
    };

    // Function to reset the form builder
    const resetForm = () => {
        setFields([]);
        setFormTitle("");
    };

    return (
        <div className="form-builder-container">
            <h1 className="form-builder-title">Create Your Form</h1>
            <input
                type="text"
                placeholder="Form Title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="form-builder-title"
            />
            <div className="field-buttons">
                <button onClick={() => addField("text")}>Add Text Input</button>
                <button onClick={() => addField("checkbox")}>Add Checkbox</button>
                <button onClick={() => addField("radio")}>Add Radio Button</button>
            </div>
            <div className="form-fields">
                {fields.map((field, index) => (
                    <div key={index} className="field">
                        <label>{field.type} Field:</label>
                        <input
                            type="text"
                            placeholder="Field Label"
                            value={field.label}
                            onChange={(e) => {
                                const updatedFields = [...fields];
                                updatedFields[index].label = e.target.value;
                                setFields(updatedFields);
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="footer-actions">
                <button onClick={resetForm} className="reset-button">
                    Reset Form
                </button>
                <button>Save Form</button>
            </div>
        </div>
    );
};

export default FormBuilder;
