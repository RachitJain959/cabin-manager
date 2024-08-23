# THE LUXE GROVE

“The Luxe Groove” is a small boutique hotel with 8 luxurious wooden cabins. This project involves creating a custom-built internal application to manage everything about the hotel, including bookings, cabins, and guests. This application will be used inside the hotel to check in guests as they arrive. Currently, the hotel has no system in place, so this project also includes building the necessary API. In the future, a customer-facing website might be developed using the same API to allow customers to book stays.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Steps](#project-steps)
8. [Bugs and Fixes](#bugs-and-fixes)

## Overview

This project is a complex, fully-featured application utilizing React and various modern libraries to provide a seamless and responsive user experience. It incorporates state management with React Query, custom hooks, and global styles to ensure a consistent look and feel across the application.

## Features

1. **Bookings**
2. **Cabins**
3. **Guests**
4. **Dashboard**
5. **Check in and out**
6. **App settings**
7. **Authentication**

## Technologies Used

- **Vite:** For fast development with optimized builds.
- **React Router:** For handling client-side routing.
- **React Query:** For data fetching, caching, and synchronization.
- **Styled Components:** For scoped and dynamic CSS-in-JS styling.
- **Supabase:** For backend services including authentication and database management.
- **React Icons:** A library of SVG icons.
- **React Hot Toasts:** Notifications for user interactions.
- **React Hook Form:** Simplified form handling with validation.
- **Recharts:** Charting library for visualizing data.
- **React Error Boundary:** Error boundary components to catch JavaScript errors.

## Project Structure

The project is organized in a modular way, separating concerns into different folders and files:

- `src/`
  - `context/`: Dark Mode context
  - `components/`: Reusable UI components.
  - `pages/`: Individual pages for the application.
  - `hooks/`: Custom hooks for reusable logic.
  - `services/`: API calls and external services.
  - `styles/`: Global styles and theme setup.
  - `App.js`: The root of the application.
  - `index.js`: Entry point for the application.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
