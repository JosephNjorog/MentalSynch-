# **MindMorph**

**Tagline: Holistic Wellness at Your Fingertips**

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## **Project Overview**
MindMorph is an integrated health and wellness platform that combines AI-powered mental health chatbots with Virtual Reality (VR) physiotherapy. This innovative solution aims to address both mental and physical health issues, offering users a comprehensive care experience from the comfort of their homes.

## **Features**
1. **AI-Powered Mental Health Chatbots**
   - Personalized Support: Tailored mental health advice, coping strategies, and therapeutic exercises based on user profiles.
   - 24/7 Availability: Round-the-clock access to mental health support.
   - Progress Tracking: Monitoring user progress and adjusting recommendations dynamically.

2. **VR Physiotherapy Sessions**
   - Guided Exercises: Interactive VR programs guiding users through physiotherapy routines with real-time feedback.
   - Customizable Routines: Personalized physiotherapy plans based on individual recovery goals.
   - Engaging VR Environments: Immersive and interactive settings to make exercises enjoyable.

3. **Integrated Health Dashboard**
   - Comprehensive Monitoring: Aggregated data from mental health and physiotherapy activities.
   - Progress Reports: Detailed insights into both mental and physical health.
   - Personalized Recommendations: Data-driven suggestions for both mental health and physiotherapy.

4. **Gamification and Rewards**
   - Motivation: Achievements, challenges, and rewards to keep users engaged.
   - Community Support: Peer connections for encouragement and support.

5. **Professional Integration**
   - Therapist and Physiotherapist Access: Optional consultations with licensed professionals.
   - Telehealth Sessions: Complementary telehealth appointments.

## **Technology Stack**
- **AI Development**
  - **NLP Frameworks**: TensorFlow, Rasa
    - **Reason**: TensorFlow is chosen for its robust support and extensive resources, making it ideal for building deep learning models. Rasa is selected for its open-source nature and customizability, allowing for tailored chatbot solutions.

- **VR Development**
  - **Engines**: Unity3D, Oculus Quest
    - **Reason**: Unity3D is chosen for its popularity, extensive asset store, and strong community support, which make it easier to learn and develop with. Oculus Quest is selected for its standalone capability and ease of use, making VR more accessible to a broader audience.

- **Frontend Development**
  - **Frameworks**: React
    - **Reason**: React is chosen for its flexibility, large ecosystem, and ease of integration with other libraries, making it suitable for building dynamic and responsive user interfaces.

- **Backend Development**
  - **Frameworks**: Node.js
    - **Reason**: Node.js is selected for its scalability and real-time capabilities, which are crucial for an interactive platform like MindMorph.

- **Database**
  - **Options**: PostgreSQL
    - **Reason**: PostgreSQL is chosen for its reliability and ability to handle complex queries, making it ideal for managing user data and analytics.

- **Real-Time Communication**
  - **Frameworks**: WebRTC
    - **Reason**: WebRTC is chosen for its robust support for real-time communication, which is crucial for telehealth sessions.

- **Mobile Development**
  - **Frameworks**: React Native
    - **Reason**: React Native is chosen for its alignment with React (frontend choice) and ease of use for building cross-platform applications, ensuring a seamless development process.

- **Analytics and Visualization**
  - **Tools**: D3.js
    - **Reason**: D3.js is selected for its powerful capabilities in creating complex and interactive visualizations, which are essential for the integrated health dashboard.

- **API Integration**
  - **Wearables**: Fitbit API, Apple HealthKit, Google Fit
    - **Reason**: Fitbit API is chosen initially for its extensive user base, with plans to expand to Apple HealthKit and Google Fit for broader compatibility and comprehensive health data integration.
<<<<<<< HEAD

## **Project Structure**

```
MindMorph/
├── backend/
│   ├── config/
│   │   ├── config.js
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── chatController.js
│   │   └── physioController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── ChatSession.js
│   │   └── PhysioSession.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   │   └── physioRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── services/
│   │   ├── aiService.js
│   │   ├── vrService.js
│   │   └── userService.js
│   ├── utils/
│   │   ├── logger.js
│   │   └── validator.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── styles/
│   │   │       ├── main.css
│   │   │       └── variables.css
│   │   ├── components/
│   │   │   ├── Chatbot/
│   │   │   │   ├── Chatbot.js
│   │   │   │   └── Chatbot.css
│   │   │   ├── Dashboard/
│   │   │   │   ├── Dashboard.js
│   │   │   │   └── Dashboard.css
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.js
│   │   │   │   └── Navbar.css
│   │   │   ├── Physio/
│   │   │   │   ├── Physio.js
│   │   │   │   └── Physio.css
│   │   │   └── Shared/
│   │   │       ├── Button.js
│   │   │       └── Input.js
│   │   ├── contexts/
│   │   │   ├── AuthContext.js
│   │   │   └── UserContext.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── ChatbotPage.js
│   │   │   ├── PhysioPage.js
│   │   │   └── DashboardPage.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── userService.js
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   └── constants.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupTests.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── .gitignore
├── LICENSE
└── README.md
```

### **Backend**

- **`config/`**: Configuration files
  - `config.js`: General app configurations.
  - `database.js`: Database connection setup.

- **`controllers/`**: Handles incoming requests and responses
  - `authController.js`: Authentication-related logic.
  - `chatController.js`: Handles chat functionalities.
  - `physioController.js`: Manages physiotherapy sessions.

- **`models/`**: Database schemas and models
  - `User.js`: User schema.
  - `ChatSession.js`: Chat session schema.
  - `PhysioSession.js`: Physiotherapy session schema.

- **`routes/`**: Application routes
  - `authRoutes.js`: Routes for authentication.
  - `chatRoutes.js`: Routes for chat functionalities.
  - `physioRoutes.js`: Routes for physiotherapy.

- **`middleware/`**: Middleware for processing requests
  - `authMiddleware.js`: Handles authentication.
  - `errorMiddleware.js`: Error handling middleware.

- **`services/`**: Business logic and external services
  - `aiService.js`: Logic for AI functionalities.
  - `vrService.js`: Logic for VR functionalities.
  - `userService.js`: User-related business logic.

- **`utils/`**: Utility functions
  - `logger.js`: Logging utility.
  - `validator.js`: Validation utility.

- **Root Files**
  - `.env`: Environment variables.
  - `app.js`: Main application file.
  - `package.json`: Dependencies and scripts.
  - `README.md`: Backend-specific documentation.

### **Frontend**

- **`public/`**: Public assets
  - `index.html`: Main HTML file.
  - `manifest.json`: PWA manifest file.

- **`src/`**: Source code
  - **`assets/`**: Static assets
    - `images/`: Image files.
    - `styles/`: Global CSS styles.
      - `main.css`: Main stylesheet.
      - `variables.css`: CSS variables.

  - **`components/`**: React components
    - **`Chatbot/`**: Chatbot component
      - `Chatbot.js`: Chatbot component logic.
      - `Chatbot.css`: Chatbot component styles.
    - **`Dashboard/`**: Dashboard component
      - `Dashboard.js`: Dashboard component logic.
      - `Dashboard.css`: Dashboard component styles.
    - **`Navbar/`**: Navbar component
      - `Navbar.js`: Navbar component logic.
      - `Navbar.css`: Navbar component styles.
    - **`Physio/`**: Physiotherapy component
      - `Physio.js`: Physiotherapy component logic.
      - `Physio.css`: Physiotherapy component styles.
    - **`Shared/`**: Shared reusable components
      - `Button.js`: Button component.
      - `Input.js`: Input component.

  - **`contexts/`**: React context API for state management
    - `AuthContext.js`: Authentication context.
    - `UserContext.js`: User context.

  - **`hooks/`**: Custom React hooks
    - `useAuth.js`: Hook for authentication logic.
    - `useFetch.js`: Hook for data fetching.

  - **`pages/`**: Page components
    - `HomePage.js`: Home page.
    - `LoginPage.js`: Login page.
    - `RegisterPage.js`: Registration page.
    - `ChatbotPage.js`: Chatbot page.
    - `PhysioPage.js`: Physiotherapy page.
    - `DashboardPage.js`: Dashboard page.

  - **`services/`**: Service APIs
    - `api.js`: General API setup.
    - `authService.js`: Authentication service.
    - `userService.js`: User service.

  - **`utils/`**: Utility functions
    - `helpers.js`: Helper functions.
    - `constants.js`: Constant values.

  - **Root Files**
    - `App.js`: Main React component.
    - `index.js`: Entry point for React application.
    - `setupTests.js`: Test setup.

- **Root Files**
  - `.env`: Environment variables.
  - `package.json`: Dependencies and scripts.
  - `README.md`: Frontend-specific documentation.

### **Root Level**

- **`.gitignore`**: Specifies files to be ignored by Git.
- **`LICENSE`**: License for the project.
- **`README.md`**: General project documentation.
=======
>>>>>>> 19faa090929fa68f5c318825ac7c9ff4e5e1307b

## **Installation**

### **Backend**

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mindmorph.git
   cd mindmorph/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. Run the backend server:
   ```sh
   npm start
   ```

### **Frontend**

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `frontend` directory with the following variables:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Run the frontend development server:
   ```sh
   npm start
   ```

## **Usage**

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Navigate through the platform to explore its features, including the AI-powered mental health chatbot and VR physiotherapy sessions.

## **Contributing**

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **Contact**
JosephNjorog  
Email: njorojoe11173@gmail.com
=======
For any questions or feedback, please contact:
- **Joseph Njoroge**
- **Email:** njorojoe11173@gmail.com
- **GitHub:** [JosephNjorog](https://github.com/JosephNjorog)


---
