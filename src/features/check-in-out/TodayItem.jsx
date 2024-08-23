import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  const { user } = useUser();

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryName}`} />
      <Guest> {guests.fullName} </Guest>
      <div> {numNights} nights</div>

      {status === "unconfirmed" &&
        (user.id === "06d6733e-c5e1-42ea-b8b7-2a20deddfb2a" ? (
          <Button
            size="small"
            variation="primary"
            onClick={() => {
              toast.error("Demo User. Read only!");
            }}
          >
            Check in
          </Button>
        ) : (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        ))}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
