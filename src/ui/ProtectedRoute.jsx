import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, user } = useUser();

  // 2. while loading, show spinner.
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. If there is NO authenticated user, redirect to /Login

  // 4. If there IS a user, render the app.

  return children;
}

export default ProtectedRoute;
