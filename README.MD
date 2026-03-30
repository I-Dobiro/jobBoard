Full Stack Job Board (Postgresql, Express, React, Node)

A full-stack job board application built with the PERN stack that allows users to create, update, and manage job listings through a clean and responsive interface.

Live Demo

https://jobboard-l2ho.onrender.com/ 

Source Code

https://github.com/I-Dobiro/jobBoard/

Overview

This project is a CRUD-based job board platform where users can post, edit, and delete job listings. It demonstrates my ability to design and implement RESTful APIs, manage relational data, and build a responsive frontend connected to a scalable backend.

Tech Stack

Frontend

•	React (Vite)
•	Tailwind CSS
•	Fetch

Backend

•	Node.js
•	Express.js

Database
•	PostgreSQL (via neon)


Features
•	Create new job listings
•	Edit existing job posts
•	Delete job listings
•	View all available jobs
•	Serverless PostgreSQL database using Neon
•	Responsive UI for mobile and desktop
•	RESTful API with Express & Node.js

Key Technical Highlights

Full CRUD Functionality

•	Implemented Create, Read, Update, Delete operations using RESTful API routes
•	Used HTTP methods correctly (GET, POST, PUT/PATCH, DELETE)
•	Ensured UI stays in sync with backend state

REST API Architecture

•	Structured backend into routes, controllers, and middleware
•	Built reusable and maintainable API endpoints
•	Implemented error handling and validation

Database Design

•	Designed a relational schema for job listings
•	Used PostgreSQL to persist and query data efficiently
•	Handled updates and deletions safely

Frontend State Management

•	Managed job listings state with React hooks
•	Implemented form handling for create/update flows
•	Optimized re-rendering after CRUD operations

Project Structure

client/
  ├── api/
  ├── components /
  ├── layout/
  └── pages/

server/
  ├── config/
  ├── controllers/
  ├── db/
  ├── routes/
  └── seeds/

Future Improvements

•	 Authentication & user-specific job posts
•	 Company profiles
•	 Pagination for large job lists
•	 Advanced search & filters
•	 Unit and integration tests

What I Learned

•	Building and structuring a full CRUD application
•	Designing RESTful APIs with Express
•	Managing relational data with PostgreSQL
•	Handling frontend-backend data synchronization
•	Improving UX for form-heavy workflows

