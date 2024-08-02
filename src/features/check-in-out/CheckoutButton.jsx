import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  const { user } = useUser();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => {
        user.id === "06d6733e-c5e1-42ea-b8b7-2a20deddfb2a"
          ? toast.error("Demo User. Read only!")
          : checkout(bookingId);
      }}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
