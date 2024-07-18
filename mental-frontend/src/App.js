import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatbotPage from './pages/ChatbotPage';
import PhysioPage from './pages/PhysioPage';
import DashboardPage from './pages/DashboardPage';
import './assets/styles/main.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/chatbot" component={ChatbotPage} />
          <Route path="/physio" component={PhysioPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
