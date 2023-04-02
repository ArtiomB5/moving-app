import React, { FC } from 'react';
import { CustomButton } from './../Components/CustomButton';

interface IUserPageProps {
  logoutHandler: () => void
}

export const UserPage: FC<IUserPageProps> = ({ logoutHandler }) => {
  const buttonHandler = () => {
    localStorage.removeItem('token')
    if (!localStorage.getItem('token')) {
      logoutHandler()
    }
  }
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <div>
          user@email.com
        </div>
        <CustomButton handler={buttonHandler} title={'Logout'} />
      </div>
      <h3>Orders</h3>
      <div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>

      </div>
    </div>
  );
}
