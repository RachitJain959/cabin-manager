import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabinForm() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCabinForm;
