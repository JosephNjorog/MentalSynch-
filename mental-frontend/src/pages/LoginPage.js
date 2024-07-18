import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/Shared/Input';
import Button from '../components/Shared/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    login({ email });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button label="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
