// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ChatInterface from './components/Chat/ChatInterface';
import VRInterface from './components/VR/VRInterface';
import UserProfile from './components/Profile/UserProfile';
import MentalHealthAssessment from './pages/MentalHealthAssessment/MentalHealthAssessment';
import PhysicalHealthAssessment from './pages/PhysicalHealthAssessment/PhysicalHealthAssessment';
import HealthRecords from './components/HealthRecords/HealthRecords';
import HealthInsights from './components/HealthInsights/HealthInsights';
import TreatmentPlan from './components/TreatmentPlan/TreatmentPlan';
import WearableIntegration from './components/WearableIntegration/WearableIntegration';
import Community from './components/Community/Community';
import PrivateRoute from './components/PrivateRoute';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/chat" component={ChatInterface} />
                <PrivateRoute path="/vr-therapy" component={VRInterface} />
                <PrivateRoute path="/profile" component={UserProfile} />
                <PrivateRoute path="/mental-health-assessment" component={MentalHealthAssessment} />
                <PrivateRoute path="/physical-health-assessment" component={PhysicalHealthAssessment} />
                <PrivateRoute path="/health-records" component={HealthRecords} />
                <PrivateRoute path="/health-insights" component={HealthInsights} />
                <PrivateRoute path="/treatment-plan" component={TreatmentPlan} />
                <PrivateRoute path="/wearable-integration" component={WearableIntegration} />
                <PrivateRoute path="/community" component={Community} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;