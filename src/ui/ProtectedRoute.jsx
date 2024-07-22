function ProtectedRoute({ children }) {
  // 1. Load the authenticated user

  // 2. while loading, show spinner.

  // 3. If there is NO authenticated user, redirect to /Login

  // 4. If there IS a user, render the app.

  return children;
}

export default ProtectedRoute;
