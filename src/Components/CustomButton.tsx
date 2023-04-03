import React, { FC } from 'react';
import { Button } from 'rebass';

interface ICustomButton {
  handler: () => void,
  title: string,
  isPrimary?: boolean
  isDisabled?: boolean
}

const getColor = (isDisabled: boolean, isPrimary: boolean) => {
  if (isDisabled) {
    return 'gray'
  } else {
    return isPrimary ? 'rgba(155,206,93,1)' : '#fff'
  }
}

export const CustomButton: FC<ICustomButton> = ({ handler, title, isPrimary = true, isDisabled = false }) => {
  return <Button
    onClick={handler}
    disabled={isDisabled}
    style={{
      backgroundColor: getColor(isDisabled, isPrimary),
      border: isPrimary ? 'none' : '2px solid rgba(155,206,93,1)',
      color: isPrimary ? 'inherit' : 'black',
      cursor: 'pointer'
    }}>
    {title}
  </Button>
}
