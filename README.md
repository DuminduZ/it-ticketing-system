# IT Ticketing System

A full-stack, production-ready IT Ticketing System designed to streamline issue tracking and resolution. This application features a robust REST API, JSON Web Token (JWT) authentication, and a responsive React frontend styled with a modern "Dark SaaS" theme.

## Features

* **Secure Authentication:** User registration and login flows protected by Spring Security, featuring BCrypt password hashing and JWT-based session management.
* **Complete Ticket CRUD:** Users can create, read, update (resolve), and delete support tickets seamlessly.
* **Protected Routing:** Frontend routes intercept unauthorized access and redirect users to the login portal.
* **Modern UI/UX:** A cohesive, dark-themed React interface utilizing CSS variables, dynamic status badges, and interactive hover states.
* **Relational Database Integration:** Persistent data storage using MySQL with Spring Data JPA.

## Tech Stack

**Frontend:**
* React (Vite)
* React Router DOM
* Context API (State Management)
* Global CSS Variables

**Backend:**
* Java & Spring Boot
* Spring Security (JWT & BCrypt)
* Spring Data JPA
* Maven

**Database:**
* MySQL

## Screenshots


* <img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/87e4417a-3f3c-4533-9978-19896939601e" />

* <img width="1919" height="780" alt="image" src="https://github.com/user-attachments/assets/3f9384d7-aa63-4688-988b-25982ab094b5" />

* <img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/b4dba5f6-c36a-44af-a7a9-0547fa8c5243" />


## Prerequisites

Before running this project, ensure you have the following installed:
* Node.js (v18+)
* Java Development Kit (JDK 21)
* Maven
* MySQL Server (or XAMPP/phpMyAdmin)

## Local Setup Instructions

### 1. Database Configuration
1. Open MySQL/phpMyAdmin and create a new database named `ticketing_db`.
2. Open `backend/src/main/resources/application.properties` and verify your database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ticketing_db
   spring.datasource.username=root
   spring.datasource.password=
   spring.jpa.hibernate.ddl-auto=update
### **2. Backend Setup**
1. Open a terminal and navigate to the backend directory:
    cd backend
2. Run the Spring Boot application using the Maven wrapper:
    .\mvnw spring-boot:run
3. The server will start on http://localhost:8080.

### **3. Frontend Setup**
1. Open a new terminal and navigate to the frontend directory:
   cd frontend
2. Install the necessary Node dependencies:
   npm install
3. Start the Vite development server:
   npm run dev
4. Access the application in your browser at http://localhost:5173.


Author
RDDM Premathilaka
