import Joi from "joi";

export interface IContactForm {
    email: string;
    subject: string;
    message: string;
}

export interface IFieldError {
    [key: string]: string;
}

export const initialValues = {
    email: "",
    subject: "",
    message: ""
};

export const Validations = (formValues: IContactForm) => {
    const fieldsValidationSchema = {
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required()
            .trim()
            .messages({
                "string.base": "Email must be a string",
                "string.email": "Please enter a valid email address",
                "string.empty": "You must type an email",
                "any.required": "You must type an email"
            }),
        subject: Joi.string().required().trim().messages({
            "string.base": "Subject must be a string",
            "string.empty": "You must type a subject",
            "any.required": "You must type a subject"
        }),
        message: Joi.string().required().trim().messages({
            "string.base": "Message must be a string",
            "string.empty": "You must type a message",
            "any.required": "You must type a message"
        })
    };

    const errors: IFieldError = {};

    const schema = Joi.object(fieldsValidationSchema);

    const objError = schema.validate(formValues, { abortEarly: false });

    if (objError.error) {
        objError.error.details.forEach((err) => {
            errors[err.path.join(".")] = err.message;
        });
    }

    return errors;
};
