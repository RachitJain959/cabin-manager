# THE LUXE GROVE

“The Luxe Groove” is a small boutique hotel with 8 luxurious wooden cabins. This project involves creating a custom-built internal application to manage everything about the hotel, including bookings, cabins, and guests. This application will be used inside the hotel to check in guests as they arrive. Currently, the hotel has no system in place, so this project also includes building the necessary API. In the future, a customer-facing website might be developed using the same API to allow customers to book stays.

## Table of Contents

1. [Overview](#overview)
1. [Project Requirements](#project-requirements)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Structure](#project-structure)
1. [Installation](#installation)
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

## Project Steps

### 1. Project Plan

- application planning: create pages, folder structures,
- global styles using styled components
- set up pages & routes
- build app layout
- build sidebar
  - logo, nav-list, nav-link (to stop reloading),

### 2. Supabase

### 3. React query remote state

- stale-time
- fetch cabin data
  - use getCabins from api
- create table, table header, table row
- useMutation to delete cabins
  - error handling,
- react hot toast setup- notifications
- react hook forms
  - create cabin form
  - create new cabin
  - handle form errors, validations (max/min capacity, discount, empty fields etc.)
- extract FormRow component
- upload images to supabase
  - FileInput attribute
  - create imageName: Math.random()-{newCabin.image.name}.replaceAll('/', '')
  - create imagePath: supabaseUrl+bucketName+imageName
- edit cabin

  - edit button
  - edit form, pre-fill edit form
  - createEditCabin-reuse createCabin func
  - hasImagePath: edit cabin will have optional image upload. So, if no img is uploaded, it will already have an imageUrl which starts with supabaseUrl. So, we can just check if

  ```
  hasImagePath ? newCabin.img : `create new image`
  ```

- custom hooks: extracting reusable logic into each custom hook

  - useDeleteCabin hook
  - useCreateCabin
  - useEditCabin
  - useCabins

- duplicate cabins

  - using useCreateCabin hook
  - image already present so no uploading of img

- fetching app settings
  - getSettings
  - updateSettingsForm
- update App settings
  - useUpdateSettings custom hook

### 4. React Render Logic

- render props pattern
- Higher Order Component (HOC)
- Compound component pattern

### 5. Modal Window

- separate addCabin file
- create Modal file and pass createCabinForm as children to Modal
- add overlay settings to modal
- closing modal 3 ways
  - X button
  - cancel button
  - createCabin button
- createPortal to make Modal out of dom tree, remove cluster
  - creating portal to avoid conflict with css property overflow:hidden on parent to avoid cutting off the modal element.

### 6. Modal v2

- using compound component to create modal v2
- create Modal context
- create parent component: Window
- detecting click outside modal: useEffect, global eventListener
  - extracting this feature to custom Hook
- Cabin edit using Modal
- Cabin delete + confirm delete modal

### 7. Reusable table

- using compound component to create table
- create TableContext, etc.
- using react render prop inside table body

### 8. Reusable Context Menu

- create Menu
- create MenusContext
- create Menus.Menu, Menus.Toggle, Menus.List. Menu.Button
- find closest button to the Menu click:

```js
function handleClick(e) {
  const rect = e.target.closest("button").getBoundingClientRect();
  setPosition({
    x: window.innerWidth - rect.width - rect.x,
    y: rect.y + rect.height + 8, #8:marginal pixels
  });
}
```

- using outsideCLick hook
- refactor entire code to allow modal window to open

### 9. Client-side filtering

- create CabinTableOperations, TableOperations, Filter
- Filter: add filters in url using useSearchParams
- creating a reusable filter component: add filterField, array of objects for filter options, active style

### 10. Client-side sorting

- create Sort-by with options
- create select
- add sorting options into url
- add sortBy to cabinTable

### 11. Bookings table

- create getBookings in apiBookings.jsx
- create BookingTable
- create useBookings using react query
- request booking data from supabase
- create bookingRow, tag, stacked, etc.

### 12. Upload data

- create data-bookings, data-cabins, data-guests
- create uploader
- include in sidebar

### 13. Api-side filtering

- create bookingTableOperations
- add bookingTableOperations in bookings page
- use searchParams in useBookings hook to get filterValue from url
- pass filterValue via queryfn to getBookings
- create query using filterValue
- add filter to queryKey in useQuery

### 14. Api-side sorting

- use searchParams in useBookings hook to get sortBy from url
- add sortBy to queryKey in useQuery
- create query using sortBy

### 15. Reusable Pagination

- create Pagination.jsx
- get currentPage using searchParams from the url
- create nextPage & PrevPage
- get exact count from supabase
- create api-side pagination
  - get currentPage from url
  - create required range of data
  - set query range in apiBookings
- Prefetching using react query

### 16. Single Booking Page

- Add menus.menu section in bookingRow
- create navigation route using useNavigate()
- create Booking.jsx & BookingDetail.jsx
- create useBooking custom hook
- create BookingDataBox & useMoveBack hook
- checking-in a booking
  - create check-in button in booking menu & checkin route
  - create checkin page
  - create checkinBooking.jsx
  - create checkbox, disable feature, confirm payment, etc.
  - create useCheckin & confirm checking-in.
  - optional breakfast
    - create checkbox & disable payment
    - grab breakfast price from useSettings hook & calculate total payment
    - update useCheckin hook to accept breakfast object details & update the db
- checking-out a booking
- deleting a booking
  - create delete button inside modal within tablerow
  - create useDeleteBooking.jsx
  - render deleteBooking in bookingRow & BookingDetails

### 17. Authenticate user login

- create authentication folder, LoginFOrm, FOrmRowVetical
- enable route authentication in supabase
- create apiAuth in services
- create useLogin & SpinnerMini

### 18. Authorization of Protected Routes

- create Protected Route
- create getCurrentUser in apiAUth
- create useUser
- create useEffect hook to naviagte to either login page or render application based on user login

### 19. User Logout

- create ButtonIcon, Logout.jsx
- create logout func in apiAuth
- create useLogout hook to call logout using react query

  - remove user from react query cache:

  ```jsx
  onSuccess: () => {
    queryClient.removeQueries(); //removes user from react query cache
    navigate("/login", { replace: true });
  },
  ```

### 20. Sign Up Form

- create SignupForm.jsx
- add register, formState, errors, getValues from useForm in SignupForm
- create signup in apiAuth & useSignup

### 21. App Header

- headerMenu.jsx, userAvatar.jsx

### 22. Update user data password

- create UpdatePasswordForm.jsx, UpdateUserDataForm
- create updateCurrentUSer in authApi
  - Update password or fullName
  - Upload avatar img
  - Update avatar in the user
- useUpdateUser.js

### 24. Dark Mode

- global styles-color
- darkModeToggle
- useLocalStorage
- DarkModeContext

### 25. Dashboard

- DashboardLayout.jsx, DashboardFilter.jsx
- apiBookings, date-toISO in helpers
- getBookingsAfterDate, getStaysAfterDate
- useRecentBookings.js,useRecentStays.js
- stat.jsx,stats.jsx
  - bookings, cgeckins, sales, occupancy-rates
- SalesChart.jsx

```js

```

### 26. Error Boundary

- ErrorFallback.jsx
- ErrorBoundary in main

```js
<React.StrictMode>
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.replace("/")}
  >
    <App />
  </ErrorBoundary>
</React.StrictMode>
```

### 27. Create Demo user

- demoDashboard, demoActivity, restrict actions

## Bugs and Fixes

1. h2 element showing h1: use 'as' instead of 'type' in styled components.
2. pagination last page filter: {code: 'PGRST103', details: 'An offset of 15 was requested, but there are only 9 rows.', hint: null, message: 'Requested range not satisfiable'}
   - Fix: if (searchParams.get("page")) searchParams.set("page", 1);
3. Login bug:

#### **userLogin.jsx**

```jsx
onSuccess: (user) => {
    queryClient.setQueriesData(["user", user]); // error line
    navigate("/dashboard");
},
```

- after login, we access dashboard which is inside Protected Route
- if a user is not logged in/authenticated, it'll be reidirected to login page.
- authentication is checked insde useUser via getCurrentUser func which return null if no session/no logged-in user.
- setQueriesData is a wrong fucn thus getCurrentUser always gets null even if the user is authenticated
- Fix: setQueryData sets the user data in reacct query cache

```js
onSuccess: (user) => {
  queryClient.setQueryData(["user"], user.user); //fixed line
  navigate("/dashboard");
};
```

\* 4. Broken Image error in update user

5. Menu button close
