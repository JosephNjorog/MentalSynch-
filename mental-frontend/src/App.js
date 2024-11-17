import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.js';
import ThemeProvider from './context/ThemeProvider.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ChatInterface from './components/Chat/ChatInterface.js';
import VRInterface from './components/VR/VRInterface.js';
import UserProfile from './components/Profile/UserProfile.js';
import MentalHealthAssessment from './pages/MentalHealthAssessment/MentalHealthAssessment';
import PhysicalHealthAssessment from './pages/PhysicalHealthAssessment/PhysicalHealthAssessment';
import HealthRecords from './components/HealthRecords/HealthRecords';
import HealthInsights from './components/HealthInsights/HealthInsights';
import TreatmentPlan from './components/TreatmentPlan/TreatmentPlan';
// import WearableIntegration from './components/WearableIntegration/WearableIntegration';
// import Community from './components/Community/Community';
import PrivateRoute from './components/PrivateRoute.js';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
                <Route path="/chat" element={<PrivateRoute element={ChatInterface} />} />
                <Route path="/vr-therapy" element={<PrivateRoute element={VRInterface} />} />
                <Route path="/profile" element={<PrivateRoute element={UserProfile} />} />
                <Route path="/mental-health-assessment" element={<PrivateRoute element={MentalHealthAssessment} />} />
                <Route path="/physical-health-assessment" element={<PrivateRoute element={PhysicalHealthAssessment} />} />
                <Route path="/health-records" element={<PrivateRoute element={HealthRecords} />} />
                <Route path="/health-insights" element={<PrivateRoute element={HealthInsights} />} />
                <Route path="/treatment-plan" element={<PrivateRoute element={TreatmentPlan} />} />
                {/* <Route path="/wearable-integration" element={<PrivateRoute element={WearableIntegration} />} /> */}
                {/* <Route path="/community" element={<PrivateRoute element={Community} />} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
