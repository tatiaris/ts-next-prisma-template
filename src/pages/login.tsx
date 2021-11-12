import React, { useState } from 'react';
import { login, navigatePath } from '../components/Helper';
import Spacer from '../components/ui/Spacer';
import StringInput from '../components/ui/StringInput';

const Login = ({ userSession }): React.ReactNode => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (userSession && userSession['id'] === '0') return <></>;
  if (userSession && userSession['id'] !== '0') navigatePath('/');
  else {
    return (
      <div style={{ padding: '15px' }}>
        <StringInput config={{ name: 'username', label: 'Username', type: 'text', placeholder: 'username' }} updateFunc={setUsername} />
        <Spacer />
        <StringInput config={{ name: 'password', label: 'Password', type: 'password', placeholder: 'password' }} updateFunc={setPassword} />
        <Spacer value="8px" />
        <button onClick={() => login(username, password)}>Submit</button>
      </div>
    );
  }
};

export default Login;
