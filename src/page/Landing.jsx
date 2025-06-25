import { useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import RequestInfoForm from "../components/requestInfoForm/RequestInfoForm";
import { AnimatePresence } from "framer-motion";
import LandingHeader from "../components/header/LandingHeader";

export default function Landing() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return(
        <div className="home-wrapper landing-page-wrapper">
            <LandingHeader />
            <div className="home-caption-wrp">
                <div className="container">
                    <div className="home-caption-content-wrp">
                        <h4 className="text-primary font-bold text-xl mb-0 leading-11">BPO Solutions Group</h4>
                        <h1 className="">Outsource Experts in Scaling Operational Roles and Sales Teams</h1>
                        <p className="pb-5 md:pr-10 mt-5 mb-2.5">Give us 15 minutes so we can demonstrate the abilities our clients tell their friends about.  We’re proud to be called the best seamless near-shore support solution in the United States and Mexico.</p>
                        <div className="flex">
                            <Button type="button" large className="uppercase !font-semibold" text="SCHEDULE A MEETING" onClick={() => setIsOpenModal(true)} />
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpenModal && (
                            <Modal 
                                small
                                onClose={() => setIsOpenModal(false)}
                                isOpen={isOpenModal}
                            >
                                <RequestInfoForm />
                            </Modal>
                        )}
                    </AnimatePresence>
                    <div className="flex items-center text-sm text-white mt-8 mb-5">Privacy by BPO Solutions Group 2020</div>
                </div>
            </div>
        </div>
    )
}