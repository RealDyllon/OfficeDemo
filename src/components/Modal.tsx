import Modal, { ModalProps } from "react-native-modal";
import React from "react";

interface CenteredModalProps extends Partial<ModalProps> {
  children: React.ReactNode
}

const CenteredModal: React.FC<CenteredModalProps> = ({children, ...props}) => {
  return (
    <Modal {...props}>
      {children}
    </Modal>
  )
}

export default CenteredModal
