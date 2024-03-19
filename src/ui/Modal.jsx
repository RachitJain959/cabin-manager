import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

// 1. Create a context
const ModalContext = createContext();

// 2. Create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. Create child components to help implementing the common task
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // Since we cannot pass this open function into the children, we use cloneElement
  // to pass the function

  // cloneElement: it is based on the same element just with props.
  // In this case, we send the props as onClick prop, which will become a function that opens the modal window.
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  // Detect click outside Modal to close Modal
  useEffect(
    function () {
      function handleClick(e) {
        // if reference exists & ref contains e.target i.e. click, then close the modal window
        if (ref.current && !ref.current.contains(e.target)) close();
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );

  if (name !== openName) return null;
  // Portaled the Modal from root element directly into document body.
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

// 4. Add child components as properties to parent component
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
