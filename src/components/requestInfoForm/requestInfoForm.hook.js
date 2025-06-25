import {useState} from "react";

export const useRequestInfoForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isMailSent, setIsMailSent] = useState(false)

    const postSendEmail = (body)=>{
        setLoading(true);
        fetch('https://reports-backend.bposolutionsgroup.com/auth/send-enquiry-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "full_name": body.fullName,
                "company_name": body.companyName,
                "phone_number": body.phoneNumber,
                "email_address": body.emailAddress,
                "message": body.message
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setIsMailSent(true);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }
    return {
        postSendEmail,
        loading,
        error,
        isMailSent
    }
}