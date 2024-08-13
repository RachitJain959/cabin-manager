import styled from "styled-components";
import { useRecentBookings } from "../dashboard/useRecentBookings";
import { useRecentStays } from "../dashboard/useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "../dashboard/Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "../dashboard/SalesChart";
import DemoTodayActivity from "./DemoTodayActivity";
import DemoDurationChart from "./DemoDurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DemoDashboardLayout() {
  const { isLoading: isLoadingBookings, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <DemoTodayActivity />

      <DemoDurationChart confirmedStays={confirmedStays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DemoDashboardLayout;
