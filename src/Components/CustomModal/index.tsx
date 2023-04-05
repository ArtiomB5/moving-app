import { FC } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'rebass';
import { CustomButton } from '../CustomButton';
import styles from './CustomModal.module.css'

interface IAuthProps {
  buttonTitle: string
  children: JSX.Element
  isOpen: boolean
  setIsOpen: (param: boolean) => void
  buttonType?: 'button' | 'link' | 'none'
}

const rebassSx = {
  display: 'inline-block',
  px: 2,
  py: 1,
  color: 'inherit',
  cursor: 'pointer'
}

export const CustomModal: FC<IAuthProps> = ({ buttonTitle, children, isOpen, setIsOpen, buttonType = 'link' }) => {

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {buttonType === 'link' && <Link variant='nav'
        onClick={openModal}
        sx={rebassSx}>
        {buttonTitle}
      </Link>}
      {buttonType === 'button' && <CustomButton handler={openModal} title={buttonTitle}/>}
      {isOpen && <Modal open={isOpen} onClose={closeModal} center>
        <div className={styles.modal}>
          {children}
        </div>
      </Modal>}
    </>
  );
}
