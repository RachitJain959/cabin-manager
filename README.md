# THE LUXE GROVE

“The Luxe Groove” is a small boutique hotel with 8 luxurious wooden cabins. This project involves creating a custom-built internal application to manage everything about the hotel, including bookings, cabins, and guests. This application will be used inside the hotel to check in guests as they arrive. Currently, the hotel has no system in place, so this project also includes building the necessary API. In the future, a customer-facing website might be developed using the same API to allow customers to book stays.

## Table of Contents

1. [Overview](#overview)
1. [Project Requirements](#project-requirements)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Structure](#project-structure)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Project Steps](#project-steps)
1. [Bugs and Fixes](#bugs-and-fixes)

## Overview

This project is a complex, fully-featured application utilizing React and various modern libraries to provide a seamless and responsive user experience. It incorporates state management with React Query, custom hooks, and global styles to ensure a consistent look and feel across the application.

## Project Requirements

1. **Authentication:**

   - Users of the app are hotel employees. They need to be logged into the application to perform tasks.
   - New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts).
   - Users should be able to upload an avatar, and change their name and password.

2. **Cabins:**
   - App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount.
   - Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo).
3. **Bookings:**

   - App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data.
   - The booking status can be “unconfirmed” (booked but not yet checked in), “checked in”, or “checked out”. The table should be filterable by this important status.
   - Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.

4. **Check in/out:**
   - Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now).
   - Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and
     then confirm that payment has been received (inside the app).
   - On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn’t already.
5. **Guests:**
   - Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification.
6. **Dashboard:**
   - The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
     - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here.
     - Statistics on recent bookings, sales, check ins, and occupancy rate.
     - A chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast at the moment).
     - A chart showing statistics on stay durations, as this is an important metric for the hotel.
7. **Settings:**
   - Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking.
   - App needs a dark mode.

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
  - `context/`: Dark Mode context.
  - `features/`: Application features.
  - `hooks/`: Custom hooks for reusable logic.
  - `pages/`: Individual pages for the application.
  - `services/`: API calls and supabase services.
  - `styles/`: Global styles and theme setup.
  - `ui/`: Reusable UI components.
  - `utils/`: Helper functions.
  - `App.js`: The root of the application.
  - `main.js`: Entry point for the application.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a .env file in the root of the project and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_key
   ```

5. Start the development server:

   ```
   npm run dev
   ```
