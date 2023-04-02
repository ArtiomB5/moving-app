import { FC, useState } from "react";
import { Input } from '@rebass/forms';
import { CustomButton } from "../Components/CustomButton";

interface IAuthProps {
  onSubmitHandler: () => void
}

export const Auth: FC<IAuthProps> = ({ onSubmitHandler }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const submitHandler = () => {
    onSubmitHandler()
    console.log({
      email,
      pass
    })
    localStorage.setItem('token', 'token')
  };

  return (
    <div style={{
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <div>
        <span>E-mail:</span>
        <Input type={"email"} value={email} onChange={e => setEmail(e.currentTarget.value)} />
      </div>
      <div>
        <span>Password:</span>
        <Input type={"password"} value={pass} onChange={e => setPass(e.currentTarget.value)} />
      </div>
      <CustomButton handler={submitHandler} title={'Submit'} />
    </div>
  );
}
