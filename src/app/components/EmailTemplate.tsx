// EMAIL TEMPLATE INTERFACES
interface IEmailTemplate {
    firstName: string;
}

// EMAIL TEMPLATE COMPONENT
export const EmailTemplate = ({ firstName }: IEmailTemplate) => (
    /* Renders */
    <div>
        <h1>Welcome, {firstName}!</h1>
    </div>
);
