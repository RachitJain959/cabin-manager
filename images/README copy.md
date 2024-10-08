## Tech stack

- styled components: allows us to write css right inside our js files
- supabase
- vite
- GlobalStyles: style for entire application, tailwind colors, shadows, border radius
- react router
- react query
- react icons
- react hot toasts
- react hook forms
- recharts
- react error boundary

## Steps

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

## Bugs

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

\*4. Broken Image error in update user

5. Menu button close
