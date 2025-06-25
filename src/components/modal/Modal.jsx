import { useEffect } from 'react';
import Button from '../button/Button';
import CloseIcon from '../svg/CloseIcon';
import { motion } from "framer-motion";

const Modal = (props) => {
    const { children, large, small, onClose, extraLarge, className, insideClose, isOpen } = props;
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    
      return () => {
        document.body.style.overflow = "auto";
      }
    }, [isOpen])

    if (!isOpen) return null;
    
    return (
        <motion.div 
            className={`modal-wrapper ${extraLarge ? 'modal-extra-large' : large ? 'modal-large' : small ? 'modal-small' : ''} ${className ? className : ''}`}
            initial={{ scale: 0, }}
            animate={{ scale: 1, }}
            exit={{ scale: 0, }}
            transition={{ times: [0, 0.3, 1]}}
        >
            <div className="modal-main-wrap">
                {onClose && (
                    !insideClose && (
                        <Button
                            type="button"
                            link
                            text={<CloseIcon width={40} height={40} />}
                            onClick={onClose}
                            className="modal-close"
                        />
                    )
                )}
                <motion.div 
                    className="modal-content-wrapper"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {insideClose && (
                        <Button
                            type="button"
                            link
                            text={<CloseIcon width={40} height={40} />}
                            onClick={onClose}
                            className="modal-close"
                        />
                    )}
                    {children}
                </motion.div>
            </div>   
        </motion.div>
    )
}

export default Modal;