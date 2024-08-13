import DashboardFilter from "../features/dashboard/DashboardFilter";
import DemoDashboardLayout from "../features/demo/DemoDashboardLayout";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useUser } from "../features/authentication/useUser";

function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      {user.id === "06d6733e-c5e1-42ea-b8b7-2a20deddfb2a" ? (
        <DemoDashboardLayout />
      ) : (
        <DashboardLayout />
      )}
    </>
  );
}

export default Dashboard;
