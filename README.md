# 🎓 Online Examination System

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Live Demo](#3-live-demo)
4. [Key Features](#4-key-features)
   - [Admin Features](#admin-features)
   - [Student Features](#student-features)
5. [Tech Stack](#5-tech-stack)
6. [System Architecture](#6-system-architecture)
7. [Project Structure](#7-project-structure)
8. [Database Design](#8-database-design)
9. [API Documentation](#9-api-documentation)
10. [Authentication & Security](#10-authentication--security)
11. [Installation & Setup](#11-installation--setup)
12. [Environment Variables](#12-environment-variables)
13. [Running the Project](#13-running-the-project)
14. [API Integration](#14-api-integration)
15. [Testing with Postman](#15-testing-with-postman)
16. [Challenges & Solutions](#16-challenges--solutions)
17. [UI Color Theme](#17-ui-color-theme)
18. [Future Enhancements](#18-future-enhancements)
19. [Developer](#19-developer)
20. [Acknowledgements](#20-acknowledgements)

---

## 1. Project Overview

<p align="justify">

The **Online Examination System** is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables educational institutions to conduct digital exams efficiently. The system provides a secure, scalable platform for creating and managing exams with two distinct user roles: **Admin** and **Student**.

</p>

<p align="justify">

Administrators can create exams with customizable durations and schedules, add questions manually or generate them automatically using AI (Google Gemini), or import real questions from the Open Trivia Database. Students can view available exams, take them in a distraction-free mode with a live countdown timer, receive instant results upon submission, and track their performance history.

</p>

---

## 2. Problem Statement

Traditional pen-and-paper examinations face numerous challenges that this digital system addresses:

| Traditional Problems | Our Solutions |
|---------------------|---------------|
| Manual paper distribution and collection | ✅ Digital exam delivery via web browser |
| Time-consuming answer evaluation | ✅ Instant auto-grading with precise scoring |
| Difficulty in question randomization | ✅ Dynamic question ordering for each student |
| Limited exam scheduling options | ✅ Scheduled exams with live countdown timers |
| No instant results for students | ✅ Immediate score display after submission |
| Difficult performance tracking | ✅ Comprehensive analytics dashboard |
| Manual result compilation | ✅ Automated CSV export for administrators |
| Paper wastage and environmental impact | ✅ Eco-friendly paperless system |
| Geographic limitations | ✅ Accessible from anywhere with internet |
| Cheating vulnerabilities | ✅ Full-screen mode with controlled environment |

---

## 3. Live Demo

The application runs locally with the following endpoints:

```
┌─────────────────────────────────────────────────────────────────┐
│                        🎯 LIVE DEMO                             │
├─────────────────────────────────────────────────────────────────┤
│  Frontend (React):    http://localhost:3000                    │
│  Backend API:         http://localhost:5000                    │
│  Health Check:        http://localhost:5000/api/health         │
└─────────────────────────────────────────────────────────────────┘
```

**Default Ports:**
- **Frontend**: 3000 (Vite dev server)
- **Backend**: 5000 (Express server)
- **Database**: MongoDB Atlas (Cloud)

---

## 4. Key Features

### 🎯 Admin Features

| Feature | Description |
|---------|-------------|
| ✅ Secure Authentication | Register and login with bcrypt password hashing and JWT tokens |
| ✅ Create Exams | Add exams with title, description, duration, and scheduled time |
| ✅ Manual Question Addition | Add MCQ questions with 4 options (A/B/C/D) and correct answer |
| ✅ AI Question Generation | Generate questions automatically using Google Gemini AI API |
| ✅ Import Trivia Questions | Import real questions from Open Trivia Database (free, no key) |
| ✅ Real-time Dashboard | View stats: total exams, students, results, average score |
| ✅ Top Performers Leaderboard | See medal rankings (🥇🥈🥉) of top scoring students |
| ✅ View All Results | Search and filter student exam results |
| ✅ Export to CSV | Download all results as CSV file for external analysis |
| ✅ Delete Exams | Remove unwanted exams from the system |

### 🎯 Student Features

| Feature | Description |
|---------|-------------|
| ✅ Secure Authentication | Register and login with JWT-based authentication |
| ✅ Browse Available Exams | View all exams with live countdown timer before start |
| ✅ Exam Status Indicators | See status: Upcoming ⏳, Live Now 🟢, Attempted ✅ |
| ✅ Distraction-Free Exam | Full-screen mode for focused examination |
| ✅ Question Navigation Panel | Jump between questions using visual question panel |
| ✅ Live Countdown Timer | Real-time timer in MM:SS format with auto-submit |
| ✅ Instant Results | Get score and grade immediately after submission |
| ✅ Retake Exams | Attempt any exam multiple times for improvement |
| ✅ Performance History | View My Results with star ratings and summary |

---

## 5. Tech Stack

### 🛠 Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 22.x | Server runtime environment |
| Express.js | 4.x | Web framework for REST API |
| MongoDB Atlas | - | Cloud database hosting |
| Mongoose | 8.x | ODM for MongoDB operations |
| bcryptjs | 2.x | Password hashing (10 salt rounds) |
| jsonwebtoken | 9.x | JWT authentication (7 day expiry) |
| express-validator | 7.x | Input validation and sanitization |
| cors | 2.x | Cross-origin resource sharing |
| dotenv | 16.x | Environment variable management |
| @google/generative-ai | - | Google Gemini AI API integration |
| node-fetch | 3.x | HTTP client for external APIs |

### 🛠 Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.x | UI library for building interfaces |
| Vite | 5.x | Fast build tool and dev server |
| React Router | 6.x | Client-side routing and navigation |
| Axios | 1.x | HTTP client with interceptors |
| Context API | - | Global state management |
| React Hot Toast | 2.x | Toast notifications |
| Lucide React | 1.8.x | Icon library |
| Tailwind CSS | 3.x | Utility-first CSS framework |

### 🛠 Tools & Services

| Tool | Purpose |
|------|---------|
| MongoDB Atlas | Cloud database hosting and management |
| MongoDB Compass | GUI for viewing and managing database |
| Postman | API testing and documentation |
| VS Code | Code editor with extensions |
| Google Gemini AI | AI-powered question generation |
| Open Trivia DB | Free trivia question API |

---

## 6. System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              SYSTEM ARCHITECTURE                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

                              ┌─────────────────────┐
                              │   CLIENT (React)    │
                              │   localhost:3000    │
                              └──────────┬──────────┘
                                         │
                                         │ HTTP/HTTPS
                                         │ (JWT Token)
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                     │
│   ┌─────────────────────────────────────────────────────────────────────────┐      │
│   │                         EXPRESS.JS SERVER                               │      │
│   │                         localhost:5000                                  │      │
│   │                                                                         │      │
│   │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │      │
│   │  │ Auth Routes  │  │ Exam Routes  │  │Result Routes │                  │      │
│   │  │   /api/auth  │  │   /api/exams │  │ /api/results │                  │      │
│   │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                  │      │
│   │         │                 │                 │                           │      │
│   │  ┌──────┴─────────────────┴─────────────────┴───────┐                  │      │
│   │  │              MIDDLEWARE LAYER                     │                  │      │
│   │  │  ┌─────────────┐    ┌─────────────────────────┐  │                  │      │
│   │  │  │   JWT Auth  │    │  Role-Based Access      │  │                  │      │
│   │  │  │  Middleware │    │  (Admin/Student)        │  │                  │      │
│   │  │  └─────────────┘    └─────────────────────────┘  │                  │      │
│   │  └───────────────────────────────────────────────────┘                  │      │
│   │                                                                         │      │
│   └─────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                          │
└─────────────────────────────────────────┼──────────────────────────────────────────┘
                                          │
                                          │ Mongoose/MongoDB Protocol
                                          ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                     │
│   ┌─────────────────────────────────────────────────────────────────────────┐      │
│   │                     MONGODB ATLAS CLOUD                                 │      │
│   │                   cluster1.mongodb.net                                  │      │
│   │                                                                         │      │
│   │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │      │
│   │   │    Users    │  │    Exams    │  │  Questions  │  │   Results   │  │      │
│   │   │  Collection │  │  Collection │  │  Collection │  │  Collection │  │      │
│   │   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  │      │
│   │                                                                         │      │
│   └─────────────────────────────────────────────────────────────────────────┘      │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         EXTERNAL API INTEGRATIONS                                   │
│                                                                                     │
│   ┌─────────────────────────────┐    ┌─────────────────────────────────────────┐  │
│   │    GOOGLE GEMINI AI         │    │        OPEN TRIVIA DATABASE            │  │
│   │    aistudio.google.com      │    │        opentdb.com                     │  │
│   │                             │    │                                         │  │
│   │  • AI Question Generation  │    │  • Free Trivia Questions               │  │
│   │  • Topic-based prompts     │    │  • 4000+ questions                     │  │
│   │  • JSON response parsing   │    │  • 24 categories                       │  │
│   └─────────────────────────────┘    └─────────────────────────────────────────┘  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Project Structure

```
WT_PROJECT/
│
├── 📄 POSTMAN_TESTING_GUIDE.md          # API testing documentation
│
├── 📁 backend/                          # Backend server (Node.js + Express)
│   │
│   ├── 📄 package.json                  # Backend dependencies
│   ├── 📄 server.js                     # Express server entry point
│   ├── 📄 .env                          # Environment variables
│   │
│   ├── 📁 config/
│   │   └── 📄 db.js                     # MongoDB connection configuration
│   │
│   ├── 📁 controllers/
│   │   ├── 📄 authController.js         # Authentication logic
│   │   ├── 📄 examController.js         # Exam management logic
│   │   └── 📄 resultController.js       # Result handling logic
│   │
│   ├── 📁 middleware/
│   │   ├── 📄 authMiddleware.js         # JWT token verification
│   │   └── 📄 roleMiddleware.js         # Role-based access control
│   │
│   ├── 📁 models/
│   │   ├── 📄 User.js                   # User schema (name, email, password, role)
│   │   ├── 📄 Exam.js                   # Exam schema (title, description, duration)
│   │   ├── 📄 Question.js               # Question schema (examId, questionText, options)
│   │   └── 📄 Result.js                 # Result schema (studentId, examId, score)
│   │
│   └── 📁 routes/
│       ├── 📄 authRoutes.js             # /api/auth endpoints
│       ├── 📄 examRoutes.js             # /api/exams endpoints
│       └── 📄 resultRoutes.js           # /api/results endpoints
│
└── 📁 frontend/                         # Frontend application (React + Vite)
    │
    ├── 📄 package.json                  # Frontend dependencies
    ├── 📄 vite.config.js                # Vite configuration
    ├── 📄 tailwind.config.js            # Tailwind CSS configuration
    ├── 📄 postcss.config.js             # PostCSS configuration
    ├── 📄 index.html                    # HTML entry point
    │
    └── 📁 src/
        ├── 📄 main.jsx                  # React app entry point
        ├── 📄 App.jsx                   # Main app component with routes
        ├── 📄 index.css                 # Global styles
        │
        ├── 📁 api/
        │   └── 📄 axios.js              # Axios instance with interceptors
        │
        ├── 📁 components/
        │   ├── 📄 Navbar.jsx            # Top navigation bar
        │   ├── 📄 Sidebar.jsx           # Admin sidebar navigation
        │   ├── 📄 TopBar.jsx            # Top bar with user info
        │   ├── 📄 Timer.jsx             # Countdown timer component
        │   ├── 📄 QuestionCard.jsx      # Question display component
        │   └── 📄 ResultTable.jsx       # Results display table
        │
        ├── 📁 context/
        │   └── 📄 AuthContext.jsx       # Authentication context provider
        │
        ├── 📁 pages/
        │   │
        │   ├── 📁 auth/
        │   │   ├── 📄 Login.jsx         # Login page
        │   │   └── 📄 Register.jsx      # Registration page
        │   │
        │   ├── 📁 admin/
        │   │   ├── 📄 AdminDashboard.jsx    # Admin dashboard with stats
        │   │   ├── 📄 CreateExam.jsx        # Exam creation form
        │   │   ├── 📄 ManageExams.jsx       # Exam management list
        │   │   └── 📄 ViewResults.jsx       # View all student results
        │   │
        │   └── 📁 student/
        │       ├── 📄 StudentDashboard.jsx # Student home page
        │       ├── 📄 AvailableExams.jsx   # List of available exams
        │       ├── 📄 ExamAttempt.jsx      # Exam taking interface
        │       ├── 📄 ExamResult.jsx       # Result after submission
        │       └── 📄 MyResults.jsx        # Student's result history
        │
        └── 📁 routes/
            ├── 📄 PrivateRoute.jsx      # Protected route wrapper
            ├── 📄 AdminRoute.jsx        # Admin-only route wrapper
            └── 📄 StudentRoute.jsx      # Student-only route wrapper
```

---

## 8. Database Design

### 📄 User Schema

```json
{
  "name": {
    "type": "String",
    "required": true,
    "trim": true
  },
  "email": {
    "type": "String",
    "required": true,
    "unique": true,
    "lowercase": true,
    "trim": true
  },
  "password": {
    "type": "String",
    "required": true,
    "minlength": 6
  },
  "role": {
    "type": "String",
    "enum": ["admin", "student"],
    "default": "student"
  }
}
```

### 📄 Exam Schema

```json
{
  "title": {
    "type": "String",
    "required": true,
    "trim": true
  },
  "description": {
    "type": "String",
    "trim": true
  },
  "duration": {
    "type": "Number",
    "required": true,
    "min": 1
  },
  "scheduledAt": {
    "type": "Date",
    "default": null
  },
  "createdBy": {
    "type": "ObjectId",
    "ref": "User",
    "required": true
  }
}
```

### 📄 Question Schema

```json
{
  "examId": {
    "type": "ObjectId",
    "ref": "Exam",
    "required": true
  },
  "questionText": {
    "type": "String",
    "required": true
  },
  "options": {
    "type": "Array",
    "items": {
      "type": "String"
    },
    "length": 4
  },
  "correctAnswer": {
    "type": "String",
    "enum": ["A", "B", "C", "D"],
    "required": true
  }
}
```

### 📄 Result Schema

```json
{
  "studentId": {
    "type": "ObjectId",
    "ref": "User",
    "required": true
  },
  "examId": {
    "type": "ObjectId",
    "ref": "Exam",
    "required": true
  },
  "score": {
    "type": "Number",
    "required": true
  },
  "totalQuestions": {
    "type": "Number",
    "required": true
  },
  "answers": {
    "type": "Array",
    "items": {
      "questionId": "ObjectId",
      "selectedAnswer": "String",
      "isCorrect": "Boolean"
    }
  },
  "submittedAt": {
    "type": "Date",
    "default": "Date.now"
  }
}
```

### 🔗 Relationships

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DATABASE RELATIONSHIPS                                │
└─────────────────────────────────────────────────────────────────────────────────┘

   ┌──────────────┐                              ┌──────────────┐
   │    Users     │                              │    Exams     │
   │──────────────│                              │──────────────│
   │ _id          │◄─── createdBy (1:N) ────────│ _id          │
   │ name         │                              │ title        │
   │ email        │                              │ description  │
   │ password     │                              │ duration     │
   │ role         │                              │ scheduledAt  │
   └──────────────┘                              │ createdBy    │
                                                 └──────┬───────┘
                                                        │
                                                        │ (1:N)
                                                        ▼
                                                ┌──────────────┐
                                                │  Questions   │
                                                │──────────────│
                                                │ _id          │
                                                │ examId  ─────┼──► Exams
                                                │ questionText │
                                                │ options[4]   │
                                                │ correctAnswer│
                                                └──────┬───────┘
                                                       │
                                                       │ (1:N)
                                                       ▼
                                                ┌──────────────┐
                                                │   Results    │
                                                │──────────────│
                                                │ _id          │
                                                │ studentId ───┼──► Users
                                                │ examId  ─────┼──► Exams
                                                │ score        │
                                                │ totalQuestions
                                                │ answers[]    │
                                                │ submittedAt  │
                                                └──────────────┘

   RELATIONSHIP SUMMARY:
   ─────────────────────
   • One User can create Many Exams (1:N)
   • One Exam can have Many Questions (1:N)
   • One Student can have Many Results (1:N)
   • One Exam can have Many Results (1:N)
```

---

## 9. API Documentation

### 📡 Base URL

```
http://localhost:5000/api
```

---

### 🔐 Authentication Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/auth/register` | Public | Register a new user |
| POST | `/auth/login` | Public | Login and get JWT token |

#### POST /api/auth/register

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### POST /api/auth/login

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

---

### 📋 Exam Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/exams/available` | Student | Get all available exams |
| GET | `/exams` | Admin | Get all exams (admin) |
| POST | `/exams` | Admin | Create a new exam |
| GET | `/exams/:examId` | Protected | Get exam with questions |
| POST | `/exams/:examId/questions` | Admin | Add manual question |
| POST | `/exams/:examId/generate-questions` | Admin | Generate via AI |
| POST | `/exams/:examId/import-trivia` | Admin | Import from trivia API |
| DELETE | `/exams/:examId` | Admin | Delete an exam |

#### GET /api/exams/available

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "exams": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "JavaScript Basics",
      "description": "Test your JS knowledge",
      "duration": 30,
      "scheduledAt": "2024-12-20T10:00:00.000Z",
      "questionCount": 10,
      "status": "upcoming"
    }
  ]
}
```

#### POST /api/exams

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "title": "Python Fundamentals",
  "description": "Basic Python MCQ",
  "duration": 20,
  "scheduledAt": "2024-12-25T14:00:00.000Z"
}
```

**Response (201):**

```json
{
  "success": true,
  "exam": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Python Fundamentals",
    "description": "Basic Python MCQ",
    "duration": 20,
    "scheduledAt": "2024-12-25T14:00:00.000Z",
    "createdBy": "507f1f77bcf86cd799439010"
  }
}
```

#### POST /api/exams/:examId/questions

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "questionText": "What is Python?",
  "options": [
    "A programming language",
    "A snake",
    "A database",
    "An operating system"
  ],
  "correctAnswer": "A"
}
```

**Response (201):**

```json
{
  "success": true,
  "question": {
    "_id": "507f1f77bcf86cd799439013",
    "examId": "507f1f77bcf86cd799439012",
    "questionText": "What is Python?",
    "options": ["A programming language", "A snake", "A database", "An operating system"],
    "correctAnswer": "A"
  }
}
```

#### POST /api/exams/:examId/generate-questions

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "topic": "JavaScript Variables",
  "count": 5,
  "difficulty": "easy"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "5 questions generated successfully",
  "questions": [
    {
      "questionText": "Which keyword declares a constant?",
      "options": ["var", "let", "const", "function"],
      "correctAnswer": "C"
    }
  ]
}
```

#### POST /api/exams/:examId/import-trivia

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "category": "Science: Computers",
  "count": 10
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "10 questions imported from Open Trivia DB",
  "questions": [...]
}
```

#### DELETE /api/exams/:examId

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "message": "Exam deleted successfully"
}
```

---

### 📊 Result Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/results/submit` | Student | Submit exam answers |
| GET | `/results/my` | Student | Get own results |
| GET | `/results` | Admin | Get all results |

#### POST /api/results/submit

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "examId": "507f1f77bcf86cd799439012",
  "answers": [
    { "questionId": "507f1f77bcf86cd799439013", "selectedAnswer": "A" },
    { "questionId": "507f1f77bcf86cd799439014", "selectedAnswer": "C" }
  ]
}
```

**Response (201):**

```json
{
  "success": true,
  "result": {
    "_id": "507f1f77bcf86cd799439020",
    "studentId": "507f1f77bcf86cd799439011",
    "examId": "507f1f77bcf86cd799439012",
    "score": 8,
    "totalQuestions": 10,
    "grade": "B+",
    "submittedAt": "2024-12-20T10:30:00.000Z"
  }
}
```

#### GET /api/results/my

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "results": [
    {
      "_id": "507f1f77bcf86cd799439020",
      "examId": {
        "title": "JavaScript Basics",
        "duration": 30
      },
      "score": 8,
      "totalQuestions": 10,
      "grade": "B+",
      "submittedAt": "2024-12-20T10:30:00.000Z"
    }
  ]
}
```

#### GET /api/results

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Response (200):**

```json
{
  "success": true,
  "results": [
    {
      "_id": "507f1f77bcf86cd799439020",
      "studentId": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "examId": {
        "title": "JavaScript Basics"
      },
      "score": 8,
      "totalQuestions": 10,
      "submittedAt": "2024-12-20T10:30:00.000Z"
    }
  ]
}
```

---

## 10. Authentication & Security

### 🔐 JWT Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        JWT AUTHENTICATION FLOW                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

   STEP 1: USER REGISTRATION
   ─────────────────────────
   ┌─────────┐    POST /api/auth/register     ┌─────────────┐
   │ Client  │ ─────────────────────────────► │   Backend   │
   │         │  {name, email, password, role} │             │
   │         │ ◄───────────────────────────── │  - Validate │
   └─────────┘   {token, user, success}       │  - Hash Pwd │
                                                │  - Create   │
                                                │    User     │
                                                └─────────────┘

   STEP 2: USER LOGIN
   ─────────────────
   ┌─────────┐    POST /api/auth/login        ┌─────────────┐
   │ Client  │ ─────────────────────────────► │   Backend   │
   │         │  {email, password}             │             │
   │         │ ◄───────────────────────────── │  - Find     │
   └─────────┘   {token, user, success}       │    User     │
                                                │  - Compare  │
                                                │    Password │
                                                │  - Generate │
                                                │    JWT      │
                                                └─────────────┘

   STEP 3: PROTECTED REQUEST
   ─────────────────────────
   ┌─────────┐    GET /api/exams/available    ┌─────────────┐
   │ Client  │ ─────────────────────────────► │   Backend   │
   │         │  Authorization: Bearer <token> │             │
   │         │ ◄───────────────────────────── │  - Verify   │
   └─────────┘   {exams, success}             │    Token    │
                                                │  - Check    │
                                                │    Role     │
                                                │  - Return   │
                                                │    Data     │
                                                └─────────────┘

   STEP 4: TOKEN VERIFICATION
   ──────────────────────────
   
   ┌─────────────────────────────────────────────────────────────┐
   │                    JWT TOKEN STRUCTURE                      │
   ├─────────────────────────────────────────────────────────────┤
   │                                                             │
   │   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   ← Header (alg)   │
   │   eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFt  ← Payload (data)  │
   │   ZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5  ← Signature       │
   │   MjAyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c      │
   │                                                             │
   └─────────────────────────────────────────────────────────────┘

   SECURITY MEASURES IMPLEMENTED:
   ──────────────────────────────
   ✅ Passwords hashed with bcrypt (10 salt rounds)
   ✅ JWT tokens expire in 7 days
   ✅ Token verified on every protected route
   ✅ Role-based access control (Admin/Student)
   ✅ Correct answers NEVER sent to frontend
   ✅ Axios interceptor auto-attaches tokens
   ✅ 401 errors trigger auto-logout
   ✅ CORS configured for security
   ✅ Input validation with express-validator
```

---

## 11. Installation & Setup

### 📋 Prerequisites

Before running the project, ensure you have:

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Node.js | 18.x or higher | [nodejs.org](https://nodejs.org) |
| npm | 9.x or higher | Comes with Node.js |
| MongoDB Atlas Account | Free tier | [mongodb.com/cloud](https://www.mongodb.com/cloud) |
| Git (optional) | Latest | [git-scm.com](https://git-scm.com) |

### 🚀 Step-by-Step Setup

#### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <repository-url> WT_PROJECT
cd WT_PROJECT

# If downloading manually, skip to next step
```

#### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Edit .env with your MongoDB URI and other variables
```

#### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd ../frontend

# Install dependencies
npm install
```

#### Step 4: Verify Installation

```bash
# Check backend dependencies
cd backend
npm list --depth=0

# Check frontend dependencies
cd ../frontend
npm list --depth=0
```

---

## 12. Environment Variables

### 📄 backend/.env

Create a `.env` file in the `backend` directory with the following variables:

```bash
# ================================================================================
# MONGODB CONNECTION
# ================================================================================
# Get your connection string from MongoDB Atlas
# Format: mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/online_exam_system

# ================================================================================
# JWT CONFIGURATION
# ================================================================================
# Secret key for signing JWT tokens (minimum 32 characters)
# Use a strong, unique key in production
JWT_SECRET=your_super_secret_jwt_key_2024_make_it_long_enough

# ================================================================================
# SERVER CONFIGURATION
# ================================================================================
# Port number for the Express server
PORT=5000

# ================================================================================
# EXTERNAL API KEYS
# ================================================================================
# Google Gemini AI API Key for question generation
# Get free key at: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

### 🔑 How to Get Each Variable

| Variable | How to Get |
|----------|------------|
| `MONGO_URI` | Create cluster on MongoDB Atlas → Connect → Copy connection string |
| `JWT_SECRET` | Generate a random string (use: `openssl rand -base64 32`) |
| `PORT` | Default is 5000, can be changed |
| `GEMINI_API_KEY` | Visit [Google AI Studio](https://aistudio.google.com/app/apikey) → Create API key |

---

## 13. Running the Project

### 🖥 Starting the Backend

```bash
# Navigate to backend directory
cd backend

# Start the server
npm start
# OR for development with auto-restart
npm run dev
```

**Expected Output:**

```
> online-exam-backend@1.0.0 start
> node server.js

MongoDB Connected: cluster1-shard-00-00.mongodb.net
Server running on port 5000
GET /api/health  {}
{}
```

### 🖥 Starting the Frontend

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Start the development server
npm run dev
```

**Expected Output:**

```
> online-exam-frontend@1.0.0 dev
> vite

  VITE v5.4.21  ready in 877 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### 🌐 Accessing the Application

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | React application |
| Backend API | http://localhost:5000 | Express REST API |
| Health Check | http://localhost:5000/api/health | Server status |

---

## 14. API Integration

### 🤖 Google Gemini AI Integration

| Aspect | Details |
|--------|---------|
| **Purpose** | Auto-generate MCQ questions for any topic using AI |
| **Provider** | Google AI (aistudio.google.com) |
| **Free Tier** | 1500 requests/day |
| **Endpoint** | `https://generativelanguage.googleapis.com/v1beta/models` |

#### How It Works:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      GEMINI AI QUESTION GENERATION                             │
└─────────────────────────────────────────────────────────────────────────────────┘

   1. Admin enters in Create Exam form:
      ┌────────────────────────────────────────┐
      │  Topic: "JavaScript Arrays"           │
      │  Number of Questions: 5               │
      │  Difficulty: Easy                     │
      └────────────────────────────────────────┘

   2. Backend sends prompt to Gemini API:
      ┌────────────────────────────────────────┐
      │  Prompt: "Generate 5 easy multiple    │
      │  choice questions about JavaScript    │
      │  Arrays. Format as JSON array with:   │
      │  questionText, options[A,B,C,D],      │
      │  correctAnswer(A/B/C/D)"              │
      └────────────────────────────────────────┘

   3. Gemini returns JSON response:
      ┌────────────────────────────────────────┐
      │  [                                     │
      │    {                                  │
      │      "question": "What is...",        │
      │      "options": ["A","B","C","D"],    │
      │      "correct": "A"                   │
      │    }                                  │
      │  ]                                    │
      └────────────────────────────────────────┘

   4. Backend parses and saves to MongoDB:
      ┌────────────────────────────────────────┐
      │  Question.create({                    │
      │    examId,                            │
      │    questionText,                      │
      │    options: [A,B,C,D],                │
      │    correctAnswer: "A"                 │
      │  })                                   │
      └────────────────────────────────────────┘
```

---

### 📚 Open Trivia Database Integration

| Aspect | Details |
|--------|---------|
| **Purpose** | Import real pre-made exam questions |
| **Provider** | Open Trivia Database (opentdb.com) |
| **API Key** | Not required - completely free |
| **Questions** | 4000+ across 24 categories |
| **Endpoint** | `https://opentdb.com/api.php` |

#### How It Works:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    OPEN TRIVIA DB IMPORT PROCESS                                │
└─────────────────────────────────────────────────────────────────────────────────┘

   1. Admin selects in Create Exam:
      ┌────────────────────────────────────────┐
      │  Category: Science: Computers         │
      │  Number of Questions: 10              │
      │  Difficulty: Medium                   │
      └────────────────────────────────────────┘

   2. Backend calls Trivia API:
      ┌────────────────────────────────────────┐
      │  GET https://opentdb.com/api.php?     │
      │    amount=10&                          │
      │    category=18&  (Computers)          │
      │    difficulty=medium&                 │
      │    type=multiple                      │
      └────────────────────────────────────────┘

   3. API returns questions:
      ┌────────────────────────────────────────┐
      │  {                                    │
      │    "results": [                       │
      │      {                                │
      │        "question": "What is...",      │
      │        "correct_answer": "Answer",    │
      │        "incorrect_answers": [A,B,C]   │
      │      }                                │
      │    ]                                  │
      │  }                                    │
      └────────────────────────────────────────┘

   4. Backend processes:
      • Decode HTML entities (e.g., &amp; → &)
      • Combine correct + incorrect answers
      • Shuffle the 4 options randomly
      • Map to A/B/C/D format
      • Save to MongoDB

   AVAILABLE CATEGORIES:
   ─────────────────────
   • General Knowledge    • Books
   • Film                 • Music
   • Television           • Video Games
   • Board Games          • Science & Nature
   • Computers            • Mathematics
   • Mythology            • Sports
   • Geography            • History
   • Politics             • Art
   • Celebrities          • Animals
   • Vehicles             • Comics
   • Gadgets              • Japanese Anime
   • Cartoon & Animations
```

---

## 15. Testing with Postman

### 📋 Test Cases

#### Test Case 1: Register Admin

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/auth/register |
| Headers | Content-Type: application/json |
| Body | `{"name":"Admin","email":"admin@test.com","password":"admin123","role":"admin"}` |

**Expected Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGci...",
  "user": { "_id": "...", "name": "Admin", "email": "admin@test.com", "role": "admin" }
}
```

---

#### Test Case 2: Register Student

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/auth/register |
| Headers | Content-Type: application/json |
| Body | `{"name":"Student","email":"student@test.com","password":"student123","role":"student"}` |

**Expected Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGci...",
  "user": { "_id": "...", "name": "Student", "email": "student@test.com", "role": "student" }
}
```

---

#### Test Case 3: Admin Login

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/auth/login |
| Headers | Content-Type: application/json |
| Body | `{"email":"admin@test.com","password":"admin123"}` |

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGci...",
  "user": { "_id": "...", "name": "Admin", "email": "admin@test.com", "role": "admin" }
}
```

---

#### Test Case 4: Create Exam (Admin Only)

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/exams |
| Headers | Content-Type: application/json, Authorization: Bearer `<admin_token>` |
| Body | `{"title":"Test Exam","description":"Sample exam","duration":30}` |

**Expected Response (201):**

```json
{
  "success": true,
  "exam": { "_id": "...", "title": "Test Exam", "description": "Sample exam", "duration": 30 }
}
```

---

#### Test Case 5: Add Question to Exam

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/exams/`<exam_id>`/questions |
| Headers | Content-Type: application/json, Authorization: Bearer `<admin_token>` |
| Body | `{"questionText":"What is React?","options":["Library","Language","Database","OS"],"correctAnswer":"A"}` |

**Expected Response (201):**

```json
{
  "success": true,
  "question": { "_id": "...", "examId": "...", "questionText": "What is React?", "options": [...], "correctAnswer": "A" }
}
```

---

#### Test Case 6: Get Available Exams (Student)

| Field | Value |
|-------|-------|
| Method | GET |
| URL | http://localhost:5000/api/exams/available |
| Headers | Authorization: Bearer `<student_token>` |

**Expected Response (200):**

```json
{
  "success": true,
  "exams": [{ "_id": "...", "title": "Test Exam", "duration": 30, "questionCount": 1 }]
}
```

---

#### Test Case 7: Get Exam Details with Questions

| Field | Value |
|-------|-------|
| Method | GET |
| URL | http://localhost:5000/api/exams/`<exam_id>` |
| Headers | Authorization: Bearer `<student_token>` |

**Expected Response (200):**

```json
{
  "success": true,
  "exam": {
    "_id": "...",
    "title": "Test Exam",
    "duration": 30,
    "questions": [{ "questionText": "...", "options": [...] }]
  }
}
```

---

#### Test Case 8: Submit Exam (Student)

| Field | Value |
|-------|-------|
| Method | POST |
| URL | http://localhost:5000/api/results/submit |
| Headers | Content-Type: application/json, Authorization: Bearer `<student_token>` |
| Body | `{"examId":"<exam_id>","answers":[{"questionId":"<question_id>","selectedAnswer":"A"}]}` |

**Expected Response (201):**

```json
{
  "success": true,
  "result": { "_id": "...", "score": 1, "totalQuestions": 1, "grade": "A+" }
}
```

---

#### Test Case 9: Get All Results (Admin)

| Field | Value |
|-------|-------|
| Method | GET |
| URL | http://localhost:5000/api/results |
| Headers | Authorization: Bearer `<admin_token>` |

**Expected Response (200):**

```json
{
  "success": true,
  "results": [{ "_id": "...", "studentId": {...}, "examId": {...}, "score": 1, "totalQuestions": 1 }]
}
```

---

## 16. Challenges & Solutions

This section documents the **10 real bugs** that were encountered and fixed during development. These are the kinds of problems that interviewers love to hear about because they demonstrate debugging skills and deep understanding of the stack.

| # | Challenge | Root Cause | Solution |
|---|-----------|------------|----------|
| 1 | **Exam disappeared after scheduled time** | Backend filtered `scheduledAt > now` in the query, hiding exams once their start time passed | Removed all date-based filters from the exam query — return ALL exams regardless of schedule |
| 2 | **Express route conflict — /available matched as /:examId** | Dynamic route `router.get("/:examId")` was registered BEFORE `router.get("/available")`, causing Express to interpret "available" as an examId parameter | Moved `router.get("/available")` BEFORE `router.get("/:examId")` in the route definitions |
| 3 | **Student auto-logged out after submitting exam** | Axios 401 interceptor triggered on any error response during submit and cleared localStorage token | Added URL pattern check in interceptor: `if (!url.includes('/results/submit')) { logout() }` |
| 4 | **Questions not loading for student during exam** | `getExamById` controller only fetched from Exam collection, not the separate Question collection | Added `Question.find({ examId })` inside getExamById and merged results before sending response |
| 5 | **Score not saving to database after exam submission** | `submitResult` had wrong field references (e.g., used `answer.selected` instead of `answer.selectedAnswer`) and no actual score calculation logic | Rewrote entire `submitResult` function with proper answer comparison loop and `Result.create()` with correct fields |
| 6 | **MongoDB projection error — Cannot do exclusion on field** | Mixed inclusion and exclusion in same Mongoose query: `{ questionText: 1, correctAnswer: 0 }` is not allowed | Changed to inclusion-only projection: `{ questionText: 1, options: 1 }` — removed correctAnswer entirely from query |
| 7 | **Admin dashboard not updating after student submits** | Dashboard fetched data once on component mount with no refresh mechanism | Added `setInterval` for auto-refresh every 30 seconds + manual Refresh button in UI |
| 8 | **Blank white page on frontend build** | Duplicate `export default API` statement in `axios.js` broke Vite's production build | Removed the duplicate export — kept only one `export default API` |
| 9 | **JWT invalid signature error after server restart** | Old tokens in localStorage were signed with different JWT_SECRET (changed in .env) but server tried to verify with new secret | Added token validation with try-catch that clears localStorage on signature error + prompts user to re-login |
| 10 | **Frontend sending wrong answer format to backend** | Frontend stored selected option as array index (0,1,2,3) instead of letter (A,B,C,D) | Mapped index to letter using `["A","B","C","D"][selectedIndex]` before sending to backend |

### Detailed Solutions

#### Solution 1: Exam Date Filter Removal

**Before (Broken):**

```javascript
// backend/controllers/examController.js
const exams = await Exam.find({
  scheduledAt: { $gte: new Date() }  // ❌ Only shows future exams
});
```

**After (Fixed):**

```javascript
// backend/controllers/examController.js
const exams = await Exam.find();  // ✅ Returns ALL exams
```

---

#### Solution 2: Route Order Fix

**Before (Broken):**

```javascript
// backend/routes/examRoutes.js
router.get('/:examId', getExamById);        // ❌ Catches /available first
router.get('/available', getAvailableExams); // Never reached
```

**After (Fixed):**

```javascript
// backend/routes/examRoutes.js
router.get('/available', getAvailableExams); // ✅ First
router.get('/:examId', getExamById);         // Second
```

---

#### Solution 3: Axios Interceptor Fix

**Before (Broken):**

```javascript
// frontend/src/api/axios.js
api.interceptors.response.use(
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear(); // ❌ Logs out on ALL 401s
      window.location.href = '/login';
    }
  }
);
```

**After (Fixed):**

```javascript
// frontend/src/api/axios.js
api.interceptors.response.use(
  (error) => {
    if (error.response?.status === 401) {
      const url = error.config?.url || '';
      // ✅ Skip logout for submit endpoint
      if (!url.includes('/results/submit')) {
        localStorage.clear();
        window.location.href = '/login';
      }
    }
  }
);
```

---

#### Solution 4: Question Fetch Fix

**Before (Broken):**

```javascript
// backend/controllers/examController.js
const exam = await Exam.findById(examId); // ❌ Only gets exam, not questions
```

**After (Fixed):**

```javascript
// backend/controllers/examController.js
const exam = await Exam.findById(examId);
const questions = await Question.find({ examId }); // ✅ Fetch questions
res.json({ success: true, exam: { ...exam._doc, questions } });
```

---

#### Solution 5: Result Submission Fix

**Before (Broken):**

```javascript
// backend/controllers/resultController.js
const result = await Result.create({
  studentId: req.user.id,
  examId: examId
  // ❌ Missing score calculation and answers
});
```

**After (Fixed):**

```javascript
// backend/controllers/resultController.js
let score = 0;
const evaluatedAnswers = answers.map(answer => {
  const question = questions.find(q => q._id.toString() === answer.questionId);
  const isCorrect = question?.correctAnswer === answer.selectedAnswer;
  if (isCorrect) score++;
  return { questionId: answer.questionId, selectedAnswer: answer.selectedAnswer, isCorrect };
});

const result = await Result.create({
  studentId: req.user.id,
  examId,
  score,
  totalQuestions: questions.length,
  answers: evaluatedAnswers
});
```

---

#### Solution 6: MongoDB Projection Fix

**Before (Broken):**

```javascript
// Returns error
const questions = await Question.find({ examId }, { questionText: 1, correctAnswer: 0 });
// Error: Cannot do inclusion on field 'correctAnswer' if exclusion is used
```

**After (Fixed):**

```javascript
// Only inclusion, no exclusion
const questions = await Question.find({ examId }, { questionText: 1, options: 1 });
// ✅ correctAnswer automatically excluded
```

---

#### Solution 7: Dashboard Auto-Refresh

**Before (Broken):**

```javascript
// frontend/src/pages/admin/AdminDashboard.jsx
useEffect(() => {
  fetchDashboardData(); // ❌ Called once only
}, []);
```

**After (Fixed):**

```javascript
// frontend/src/pages/admin/AdminDashboard.jsx
useEffect(() => {
  fetchDashboardData();
  const interval = setInterval(fetchDashboardData, 30000); // ✅ Refresh every 30s
  return () => clearInterval(interval);
}, []);
```

---

#### Solution 8: Duplicate Export Fix

**Before (Broken):**

```javascript
// frontend/src/api/axios.js
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export default API;
export default API; // ❌ Duplicate export breaks Vite build
```

**After (Fixed):**

```javascript
// frontend/src/api/axios.js
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export default API; // ✅ Single export
```

---

#### Solution 9: JWT Signature Error Handling

**Before (Broken):**

```javascript
// No error handling for invalid tokens
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

**After (Fixed):**

```javascript
// With try-catch and cleanup
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
} catch (err) {
  localStorage.clear(); // ✅ Clear invalid token
  return res.status(401).json({ message: 'Token is not valid' });
}
```

---

#### Solution 10: Answer Format Fix

**Before (Broken):**

```javascript
// frontend - sending index
const answer = { questionId, selectedAnswer: selectedIndex }; // ❌ 0,1,2,3
```

**After (Fixed):**

```javascript
// frontend - sending letter
const answer = {
  questionId,
  selectedAnswer: ["A", "B", "C", "D"][selectedIndex] // ✅ A,B,C,D
};
```

---

## 17. UI Color Theme

The application uses a modern, professional color palette designed for educational platforms:

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Blue** | `#3B82F6` | Buttons, links, active states |
| **Primary Dark** | `#1E40AF` | Headers, emphasis |
| **Success Green** | `#10B981` | Success messages, correct answers |
| **Warning Orange** | `#F59E0B` | Warnings, pending states |
| **Error Red** | `#EF4444` | Errors, incorrect answers |
| **Background Light** | `#F3F4F6` | Page backgrounds |
| **Background White** | `#FFFFFF` | Cards, containers |
| **Text Primary** | `#111827` | Main text |
| **Text Secondary** | `#6B7280` | Secondary text, labels |
| **Border Gray** | `#E5E7EB` | Borders, dividers |

### Tailwind CSS Configuration

```javascript
// frontend/tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e40af',
        }
      }
    }
  },
  plugins: []
}
```

---

## 18. Future Enhancements

The following features can be added to make the system more comprehensive:

| # | Enhancement | Description |
|---|-------------|-------------|
| 1 | **Email Notifications** | Send exam schedule reminders and result notifications via email |
| 2 | **Video Proctoring** | Integrate webcam recording during exam for anti-cheating |
| 3 | **Question Bank** | Create a shared question bank that can be reused across multiple exams |
| 4 | **Analytics Dashboard** | Detailed performance analytics with charts and graphs for students |
| 5 | **Mobile App** | React Native or Flutter mobile application for exam access |
| 6 | **Offline Mode** | Progressive Web App (PWA) with offline exam capability |
| 7 | **Multi-language Support** | Add i18n for multiple languages (Hindi, Spanish, etc.) |
| 8 | **Exam Templates** | Pre-built exam templates for common subjects |
| 9 | **Peer Review** | Allow students to review other students' answers (for essay questions) |
| 10 | **Certificate Generation** | Generate PDF certificates upon course completion |
| 11 | **Live Chat Support** | In-app chat for student queries during exam |
| 12 | **Time Zone Support** | Handle exams across different time zones properly |

---

## 19. Developer

<p align="center">

**Project Information**

| Field | Details |
|-------|---------|
| **Developer** | Akshay Ella |
| **Project Type** | Academic College Project (Web Technologies) |
| **Institution** | BVC Engineering College |
| **Year** | 2024-2025 |
| **Stack** | MERN (MongoDB, Express.js, React.js, Node.js) |

</p>

---

## 20. Acknowledgements

<p align="justify">

This project was made possible by the following open-source technologies and services:

</p>

| Technology | Acknowledgement |
|------------|-----------------|
| **MongoDB** | Thanks to MongoDB Atlas for providing free cloud database hosting |
| **Express.js** | Gratitude to the Express team for the excellent Node.js web framework |
| **React** | Thanks to Meta and the React community for the powerful UI library |
| **Node.js** | Thanks to Node.js Foundation for the server-side JavaScript runtime |
| **Google Gemini AI** | Appreciation for the free AI API for question generation |
| **Open Trivia DB** | Thanks for the free trivia question API with no authentication required |
| **Tailwind CSS** | Thanks to the Tailwind team for the utility-first CSS framework |
| **Vite** | Appreciation for the blazing fast build tool |
| **Lucide React** | Thanks for the beautiful icon set |
| **Postman** | Thanks for the excellent API testing tool |
| **bcryptjs** | Thanks for secure password hashing |
| **jsonwebtoken** | Thanks for JWT implementation |

---

<p align="center">

---

## 📝 Note

</p>

<p align="justify">

This project demonstrates full-stack development skills including REST API design, JWT authentication, role-based access control, real-time features, third-party API integration, and cloud database usage — all built from scratch using the MERN stack. The application is production-ready with proper security measures, error handling, and a responsive user interface.

</p>

<p align="center">

**Built with ❤️ using MERN Stack**

**© 2024-2025 Akshay Ella — All Rights Reserved**

</p>

---

<!--
  ========================================================================
  END OF README.md
  ========================================================================
  Last Updated: April 2025
  Version: 1.0.0
  ========================================================================
-->