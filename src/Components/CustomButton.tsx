import React, { FC } from 'react';
import { Button } from 'rebass';

interface ICustomButton {
  handler: () => void,
  title: string,
  isPrimary?: boolean
}

export const CustomButton: FC<ICustomButton> = ({ handler, title, isPrimary = true }) => {
  return <Button onClick={handler} style={{
    backgroundColor: isPrimary ? 'rgba(155,206,93,1)' : '#fff',
    border: isPrimary ? 'none' : '2px solid rgba(155,206,93,1)',
    color: isPrimary ? 'inherit' : 'black',
    cursor: 'pointer'
  }}>{title}</Button>
}
