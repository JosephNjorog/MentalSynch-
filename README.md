## MentalSynch - Holistic Wellness at Your Fingertips

### Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Project Overview
MentalSynch is an integrated health and wellness platform that combines AI-powered mental health chatbots with Virtual Reality (VR) physiotherapy. This innovative solution aims to address both mental and physical health issues, offering users a comprehensive care experience from the comfort of their homes.

## Features
### AI-Powered Mental Health Chatbots
- **Personalized Support:** Tailored mental health advice, coping strategies, and therapeutic exercises based on user profiles.
- **24/7 Availability:** Round-the-clock access to mental health support.
- **Progress Tracking:** Monitoring user progress and adjusting recommendations dynamically.

### VR Physiotherapy Sessions
- **Guided Exercises:** Interactive VR programs guiding users through physiotherapy routines with real-time feedback.
- **Customizable Routines:** Personalized physiotherapy plans based on individual recovery goals.
- **Engaging VR Environments:** Immersive and interactive settings to make exercises enjoyable.

### Integrated Health Dashboard
- **Comprehensive Monitoring:** Aggregated data from mental health and physiotherapy activities.
- **Progress Reports:** Detailed insights into both mental and physical health.
- **Personalized Recommendations:** Data-driven suggestions for both mental health and physiotherapy.

### Gamification and Rewards
- **Motivation:** Achievements, challenges, and rewards to keep users engaged.
- **Community Support:** Peer connections for encouragement and support.

### Professional Integration
- **Therapist and Physiotherapist Access:** Optional consultations with licensed professionals.
- **Telehealth Sessions:** Complementary telehealth appointments.

## Technology Stack
### AI Development
- **NLP Frameworks:** TensorFlow, Rasa
- **Reason:** TensorFlow is chosen for its robust support and extensive resources, making it ideal for building deep learning models. Rasa is selected for its open-source nature and customizability, allowing for tailored chatbot solutions.

### VR Development
- **Engines:** Unity3D, Oculus Quest
- **Reason:** Unity3D is chosen for its popularity, extensive asset store, and strong community support, which make it easier to learn and develop with. Oculus Quest is selected for its standalone capability and ease of use, making VR more accessible to a broader audience.

### Frontend Development
- **Frameworks:** React
- **Reason:** React is chosen for its flexibility, large ecosystem, and ease of integration with other libraries, making it suitable for building dynamic and responsive user interfaces.

### Backend Development
- **Frameworks:** Node.js
- **Reason:** Node.js is selected for its scalability and real-time capabilities, which are crucial for an interactive platform like MentalSynch.

### Database
- **Options:** PostgreSQL
- **Reason:** PostgreSQL is chosen for its reliability and ability to handle complex queries, making it ideal for managing user data and analytics.

### Real-Time Communication
- **Frameworks:** WebRTC
- **Reason:** WebRTC is chosen for its robust support for real-time communication, which is crucial for telehealth sessions.

### Mobile Development
- **Frameworks:** React Native
- **Reason:** React Native is chosen for its alignment with React (frontend choice) and ease of cross-platform mobile development, reducing the time and effort needed to develop both iOS and Android applications.

### Analytics and Visualization
- **Tools:** D3.js
- **Reason:** D3.js is selected for its powerful data visualization capabilities, enabling the creation of detailed and interactive progress reports.

### API Integration
- **Wearables:** Fitbit API, Apple HealthKit, Google Fit
- **Reason:** These APIs are chosen for their widespread use and ease of integration, allowing for comprehensive health monitoring through popular wearable devices.

## Project Structure
### Backend
```plaintext
MentalSynch/
├── config/
│   ├── config.js           # General configuration
│   └── database.js         # Database configuration
├── controllers/
│   ├── authController.js   # Handles authentication
│   ├── chatController.js   # Manages chatbot interactions
│   └── physioController.js # Manages physiotherapy sessions
├── models/
│   ├── User.js             # User schema
│   ├── ChatSession.js      # Chat session schema
│   ├── PhysioSession.js    # Physiotherapy session schema
│   └── localModel.js       # Local pre-trained models schema
├── routes/
│   ├── authRoutes.js       # Authentication routes
│   ├── chatRoutes.js       # Chatbot routes
│   └── physioRoutes.js     # Physiotherapy routes
├── middleware/
│   ├── authMiddleware.js   # Authentication middleware
│   └── errorMiddleware.js  # Error handling middleware
├── services/
│   ├── aiService.js        # Logic for AI functionalities
│   ├── vrService.js        # Logic for VR functionalities
│   └── userService.js      # User-related business logic
├── utils/
│   ├── logger.js           # Logging utility
│   └── validator.js        # Validation utility
├── .env                    # Environment variables
├── app.js                  # Main application file
├── package.json            # Dependencies and scripts
└── README.md               # Backend-specific documentation
```

### Frontend
```plaintext
MentalSynch/
├── public/
│   ├── index.html          # Main HTML file
│   └── manifest.json       # PWA manifest file
├── src/
│   ├── assets/             # Static assets
│   │   ├── images/         # Image files
│   │   └── styles/         # Global CSS styles
│   │       ├── main.css    # Main stylesheet
│   │       └── variables.css # CSS variables
│   ├── components/         # React components
│   │   ├── Chatbot/
│   │   │   ├── Chatbot.js  # Chatbot component logic
│   │   │   └── Chatbot.css # Chatbot component styles
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js# Dashboard component logic
│   │   │   └── Dashboard.css # Dashboard component styles
│   │   ├── Navbar/
│   │   │   ├── Navbar.js   # Navbar component logic
│   │   │   └── Navbar.css  # Navbar component styles
│   │   ├── Physio/
│   │   │   ├── Physio.js   # Physiotherapy component logic
│   │   │   └── Physio.css  # Physiotherapy component styles
│   │   └── Shared/         # Shared reusable components
│   │       ├── Button.js   # Button component
│   │       └── Input.js    # Input component
│   ├── contexts/           # React context API for state management
│   │   ├── AuthContext.js  # Authentication context
│   │   └── UserContext.js  # User context
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.js      # Hook for authentication logic
│   │   └── useFetch.js     # Hook for data fetching
│   ├── pages/              # Page components
│   │   ├── HomePage.js     # Home page
│   │   ├── LoginPage.js    # Login page
│   │   ├── RegisterPage.js # Registration page
│   │   ├── ChatbotPage.js  # Chatbot page
│   │   ├── PhysioPage.js   # Physiotherapy page
│   │   └── DashboardPage.js# Dashboard page
│   ├── services/           # Service APIs
│   │   ├── api.js          # General API setup
│   │   ├── authService.js  # Authentication service
│   │   └── userService.js  # User service
│   ├── utils/              # Utility functions
│   │   ├── helpers.js      # Helper functions
│   │   └── constants.js    # Constant values
│   ├── App.js              # Main React component
│   └── index.js            # Entry point for React application
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
├── setupTests.js           # Test setup
└── README.md               # Frontend-specific documentation
```

### Root Level
```plaintext
MentalSynch/
├── .gitignore              # Specifies files to be ignored by Git
├── LICENSE                 # License for the project
└── README.md               # General project documentation
```

## Data Flow and Workflow

### User Interaction Flow
1. **Onboarding**: Users sign up or log in through the MentalSynch app. During onboarding, they provide essential information to personalize their experience.
    - **Login/Register**: Users can log in or register for an account.
    - **Profile Setup**: Users fill in personal details and preferences.
  
2. **Dashboard**: Users are presented with a comprehensive dashboard displaying their mental and physical health metrics.
   

 - **Health Metrics**: Displays current health statistics.
    - **Recommendations**: Offers personalized health advice and exercises.

3. **Mental Health Chatbot**: Users interact with an AI-powered chatbot to receive mental health support.
    - **Chatbot Interaction**: Users chat with the AI to get mental health advice.
    - **Progress Tracking**: The chatbot tracks the user's progress and updates recommendations accordingly.

4. **VR Physiotherapy**: Users participate in VR physiotherapy sessions to aid in physical recovery.
    - **Session Selection**: Users choose from a variety of physiotherapy sessions.
    - **VR Engagement**: Users engage in VR sessions with real-time feedback.

5. **Professional Support**: Users can schedule telehealth sessions with licensed therapists or physiotherapists.
    - **Telehealth Booking**: Users can book appointments with professionals.
    - **Session Management**: Professionals manage and track user sessions.

### Workflow
1. **User Authentication**: The authentication process verifies user credentials, allowing access to the app.
    - **API Endpoint**: `/api/auth`
    - **Methods**: `POST /login`, `POST /register`

2. **Data Synchronization**: User data is synchronized across the AI and VR modules to provide a cohesive experience.
    - **API Endpoint**: `/api/user/sync`
    - **Methods**: `POST /sync`

3. **AI Chatbot Interactions**: The chatbot module handles user interactions, providing personalized mental health support.
    - **API Endpoint**: `/api/chat`
    - **Methods**: `POST /message`

4. **VR Physiotherapy Sessions**: The VR module manages user engagement in physiotherapy sessions.
    - **API Endpoint**: `/api/physio`
    - **Methods**: `GET /sessions`, `POST /feedback`

5. **Health Data Analysis**: The system analyzes health data to provide insights and recommendations.
    - **API Endpoint**: `/api/health`
    - **Methods**: `GET /metrics`, `POST /update`

6. **Telehealth Integration**: Integration with telehealth services allows users to schedule and manage professional support sessions.
    - **API Endpoint**: `/api/telehealth`
    - **Methods**: `GET /appointments`, `POST /book`

## Installation
To set up MentalSynch locally, follow these steps:

### Backend
1. **Clone the repository:**
    ```bash
    git clone https://github.com/JosephNjorog/MentalSynch.git
    ```
2. **Navigate to the backend directory:**
    ```bash
    cd MentalSynch/backend
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**
    - Create a `.env` file and add the necessary environment variables.
5. **Run the application:**
    ```bash
    npm start
    ```

### Frontend
1. **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up environment variables:**
    - Create a `.env` file and add the necessary environment variables.
4. **Run the application:**
    ```bash
    npm start
    ```

## Usage
1. **Launch the application:** Open a web browser and navigate to `http://localhost:3000`.
2. **Sign up/Login:** Create a new account or log in with existing credentials.
3. **Explore the dashboard:** Access your health metrics and personalized recommendations.
4. **Interact with the chatbot:** Receive mental health support through the AI-powered chatbot.
5. **Engage in VR sessions:** Participate in guided VR physiotherapy exercises.
6. **Book telehealth sessions:** Schedule appointments with licensed professionals for additional support.

## Contributing
We welcome contributions to improve MentalSynch. To contribute, follow these steps:
1. **Fork the repository** on GitHub.
2. **Create a branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes** and commit them with clear commit messages.
4. **Push to your branch:**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Submit a pull request** detailing your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For inquiries, please contact:
- **Joseph Njoroge Mwangi**
- **Email:** njorojoe11173@gmail.com

---
