import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, user } = useUser();

  // 2. while loading, show spinner.
  if (isLoading) return <Spinner />;

  // 3. If there is NO authenticated user, redirect to /Login

  // 4. If there IS a user, render the app.

  return children;
}

export default ProtectedRoute;
