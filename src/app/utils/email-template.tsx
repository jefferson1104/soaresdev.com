/* eslint-disable @next/next/no-img-element */
// EMAIL TEMPLATE INTERFACES
export interface IEmailTemplate {
    subject: string;
    email: string;
    message: string;
}

// EMAIL TEMPLATE UTIL
export const EmailTemplate = ({ subject, email, message }: IEmailTemplate) => {
    /* Renders */
    return (
        <div style={{}}>
            <img
                src="https://i.ibb.co/F7DVpwb/logo-normal-600x500.png"
                alt="soaresdev.com"
                width={125}
                height={100}
                style={{
                    marginTop: "40px",
                    marginBottom: "24px"
                }}
            />
            <h1
                style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    textAlign: "left",
                    fontFamily: "sans-serif"
                }}
            >
                CONTACT FROM SOARESDEV WEBSITE
            </h1>
            <p
                style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    fontFamily: "sans-serif"
                }}
            >
                <span style={{ fontWeight: "bold" }}>Email:</span> {email}
            </p>
            <p
                style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    fontFamily: "sans-serif"
                }}
            >
                <span style={{ fontWeight: "bold" }}>Subject:</span> {subject}
            </p>{" "}
            <p
                style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    fontFamily: "sans-serif"
                }}
            >
                <span style={{ fontWeight: "bold" }}>Message:</span> {message}
            </p>
        </div>
    );
};
