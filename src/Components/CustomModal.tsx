import React, { FC, useEffect } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button, Link } from 'rebass';

interface IAuthProps {
  buttonTitle: string
  children: JSX.Element
  isOpen: boolean
  setIsOpen: (param: boolean) => void
  buttonType?: 'button' | 'link' | 'none'
}

export const CustomModal: FC<IAuthProps> = ({ buttonTitle, children, isOpen, setIsOpen, buttonType = 'link' }) => {
  useEffect(() => {
    localStorage.setItem('token', 'token')
  }, [])
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {buttonType === 'link' && <Link variant='nav'
        onClick={openModal}
        sx={{
          display: 'inline-block',
          px: 2,
          py: 1,
          color: 'inherit',
          cursor: 'pointer'
        }}>
        {buttonTitle}
      </Link>}
      {buttonType === 'button' && <Button mr={2} onClick={openModal}>
        {buttonTitle}
      </Button>}
      {isOpen && <Modal open={isOpen} onClose={closeModal} center>
        <div style={{
          padding: "30px 5px 10px 5px"
        }}>
          {children}
        </div>
      </Modal>}
    </>
  );
}
