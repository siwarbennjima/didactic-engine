import React from 'react'
import classes from './BuildControl.module.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={() => props.handleLess(props.label)} className={classes.Less}>Less</button>
      <button onClick={() => props.handlemore(props.label)} className={classes.More}>More</button>
    </div>
  )
}

export default buildControl