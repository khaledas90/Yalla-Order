import React, { cloneElement, createContext, useContext, useState } from 'react'
import './Modal.css';
import { createPortal } from 'react-dom';
import useClickOutside from '../../hooks/useClickOutside';
import CloseIcon from '@mui/icons-material/Close';
const ModalContext = createContext()

function Modal({children}) {
    const [openName, setOpenName] = useState("");

    const close = () => setOpenName("");
    const open = setOpenName;
  
    return (
      <ModalContext.Provider value={{ openName, close, open }}>
        {children}
      </ModalContext.Provider>
    );
}
function Open({ children, opens: opensWindowName }){
    const { open } = useContext(ModalContext);
    
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }){
    const { openName, close } = useContext(ModalContext);
    const {ref} = useClickOutside(close);
    if (name !== openName) return null;
    return createPortal(
    <div className='overlay'>
      <div className='StyledModal' ref={ref}>
        <button className='closeBtn' onClick={close}>
          <CloseIcon />
        </button>
        <div className='window-container'>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
         document.getElementById('root')
      )
}


Modal.Open = Open;
Modal.Window = Window;

export default Modal

//       ***Usage***
//        <Modal>
//         <Modal.Open opens="window-name">
//           <Button>Add new cabin</Button>
//         </Modal.Open>
//         <Modal.Window name="window-name">
//           <CreateCabinForm />
//         </Modal.Window>
//       </Modal>
