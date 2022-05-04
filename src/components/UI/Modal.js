import classes from "./Modal.module.css";
import ReactDom from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
    const parentElement = document.getElementById('modal-content');
  return (
    <>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />,parentElement)}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,parentElement)}
    </>
  );
};

export default Modal;
