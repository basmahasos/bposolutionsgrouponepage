import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import { AnimatePresence } from "framer-motion";
import LandingHeader from "../components/header/LandingHeader";

export default function Landing() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    useEffect(() => {
        const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
        const existing = document.querySelector(`script[src="${scriptSrc}"]`);
        if (existing) return;

        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);
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
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/LEoFtWFsUCGJa5zkzUYx"
                                    style={{ width: "100%", height: "951px", border: "none", borderRadius: "12px" }}
                                    id="inline-LEoFtWFsUCGJa5zkzUYx"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Optin Form #1"
                                    data-height="951"
                                    data-layout-iframe-id="inline-LEoFtWFsUCGJa5zkzUYx"
                                    data-form-id="LEoFtWFsUCGJa5zkzUYx"
                                    title="Optin Form #1"
                                />
                            </Modal>
                        )}
                    </AnimatePresence>
                    <div className="flex items-center mt-8 mb-5 text-sm text-white">Privacy by BPO Solutions Group Corporation 2025</div>
                </div>
            </div>
        </div>
    )
}
