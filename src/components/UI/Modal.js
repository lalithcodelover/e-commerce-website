
import classes from './Modal.module.css'

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>
}

const ModayOverlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
  return (
    <Fragment>
{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
{ReactDOM.createPortal(<ModayOverlay>{props.children}</ModayOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal
