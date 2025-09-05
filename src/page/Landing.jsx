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
                        <h4 className="mb-0 text-xl font-bold text-primary leading-11">BPO Solutions Group</h4>
                        <h1 className="">Outsource Staffing Experts in Scaling Operational Roles and Internal Teams</h1>
                        <p className="pb-5 md:pr-10 mt-5 mb-2.5">We are a performance based international staffing company built and managed by proven USA executives. Give us 15 minutes and you'll see for yourself why our clients tell their friends and industry colleagues about our company. We’re proud to be called the best international staffing solution in the United States.</p>
                        <div className="flex">
                            <Button type="button" large className="uppercase !font-semibold" text="SCHEDULE" onClick={() => setIsOpenModal(true)} />
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
                    <div className="flex items-center mt-8 mb-5 text-sm text-white">Privacy by BPO Solutions Group Corporation 2025</div>
                </div>
            </div>
        </div>
    )
}
