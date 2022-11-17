
import classes from './Modal.module.css'

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'


const ModayOverlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
  return (
    <Fragment>
{ReactDOM.createPortal(<ModayOverlay>{props.children}</ModayOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal
