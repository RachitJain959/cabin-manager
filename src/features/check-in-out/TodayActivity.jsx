import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import { useUser } from "../authentication/useUser";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const fakeActivities = [
  {
    id: 219,
    status: "unconfirmed",
    guests: {
      fullName: "Jonathan Smith",
      countryFlag: "https://flagcdn.com/gb.svg",
      nationality: "Great Britain",
    },
    numNights: 7,
  },
  {
    id: 240,
    guests: {
      fullName: "Rachit Jain",
      countryFlag: "https://flagcdn.com/in.svg",
      nationality: "India",
    },
    status: "checked-in",
    numNights: 5,
  },
  {
    id: 234,
    guests: {
      fullName: "David Smith",
      countryFlag: "https://flagcdn.com/au.svg",
      nationality: "Australia",
    },
    status: "unconfirmed",
    numNights: 11,
  },
  {
    id: 226,
    guests: {
      fullName: "Maria Rodriguez",
      countryFlag: "https://flagcdn.com/es.svg",
      nationality: "Spain",
    },
    status: "checked-in",
    numNights: 2,
  },
  //   {
  //     id: 241,
  //     guests: {
  //       fullName: "Abdul Rahman",
  //       countryFlag: "https://flagcdn.com/sa.svg",
  //       nationality: "Saudi Arabia",
  //     },
  //     status: "unconfirmed",
  //     numNights: 5,
  //   },
];

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  const { user } = useUser();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {/* if : activities?.length > 0 => Show today's activity.
          else: if: demo user ? => display fakeActivity
                else: show no activity */}

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : user.id === "06d6733e-c5e1-42ea-b8b7-2a20deddfb2a" ? (
          <TodayList>
            {fakeActivities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity today...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
