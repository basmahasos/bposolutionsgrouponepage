import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../button/Button';
import { motion } from "framer-motion";
import {useRequestInfoForm} from "./requestInfoForm.hook.js";
import useRegex from '../../hooks/regex.hook.js';

const RequestInfoForm = () => {
    const {postSendEmail, loading, error, isMailSent} = useRequestInfoForm();
    const { emailRegex, phoneNumbersFormat} = useRegex();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            companyName: "",
            phoneNumber: "",
            emailAddress: "",
            message: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Please enter your Full name"),
            companyName: Yup.string().required("Please enter your Company Name"),
            phoneNumber: Yup.string().matches(phoneNumbersFormat, "Please enter valid Phone number").required("Phone number is required"),
            emailAddress: Yup.string().matches(emailRegex, "Please enter valid Email Address").required("Email Address is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values) => {
            postSendEmail(values)
        },
    })

    if(isMailSent) {
        return (
            <motion.div
                className="flex flex-col w-full gap-4 md:gap-8 px-8 md:px-10 py-6"
            >
                <h3 className="text-28 font-extrabold text-black-300">THANK YOU!</h3>
                <div>
                    Your note has been submitted, you will receive an appropriate response for your inquiry within the next business day.
                </div>
            </motion.div>
        )
    }
    return (
        <motion.div 
            className="flex flex-col w-full gap-4 md:gap-8 px-8 md:px-10 py-6"
        >
            <h3 className="text-28 font-extrabold text-black-300">Request info</h3>
            {error && (<div>{error}</div>)}
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        className="form-control"
                    />
                    {formik.touched.fullName && formik.errors.fullName ? 
                        <div className="message-error">
                            {formik.errors.fullName}
                        </div> 
                        : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        className="form-control"
                    />
                    {formik.touched.companyName && formik.errors.companyName ? 
                        <div className="message-error">
                            {formik.errors.companyName}
                        </div> 
                        : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        className="form-control"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                        <div className="message-error">
                            {formik.errors.phoneNumber}
                        </div> 
                        : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="emailAddress" className="form-label">Email</label>
                    <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        onChange={formik.handleChange}
                        value={formik.values.emailAddress}
                        className="form-control"
                    />
                    {formik.touched.emailAddress && formik.errors.emailAddress ? 
                        <div className="message-error">
                            {formik.errors.emailAddress}
                        </div> 
                        : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        placeholder="Enter message"
                        className="form-control"
                    />
                    {formik.touched.message && formik.errors.message ? 
                        <div className="message-error">
                            {formik.errors.message}
                        </div> 
                        : null
                    }
                </div>
                <div className="flex pt-6 pb-4 md:pb-0">
                    <Button type="submit" dark className="w-full !rounded-lg !font-semibold" text={loading ? "Please wait..." : "Send Now"} />
                </div>
            </form>
        </motion.div>
    )
}

export default RequestInfoForm